import { useState, useMemo, useEffect, useCallback } from "react";
import { jobs, getUniqueLocations, Job } from "../data/jobs";
import { FilterBar, FilterState } from "../components/FilterBar";
import { JobCard } from "../components/JobCard";
import { JobModal } from "../components/JobModal";
import { Toast } from "../components/Toast";
import { getSavedJobIds, saveJob, unsaveJob, isJobSaved } from "../utils/storage";
import { getPreferences, hasPreferences, UserPreferences } from "../utils/preferences";
import { addMatchScores, JobWithMatchScore } from "../utils/matchScore";
import { JobStatus, getJobStatus, setJobStatus, getAllJobStatuses } from "../utils/jobStatus";

export const Dashboard = () => {
  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    location: "",
    mode: "",
    experience: "",
    source: "",
    status: "All",
    sort: "latest",
  });

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [showOnlyMatches, setShowOnlyMatches] = useState(false);
  const [jobStatuses, setJobStatuses] = useState<Record<string, JobStatus>>({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const locations = useMemo(() => getUniqueLocations(), []);

  useEffect(() => {
    setSavedJobIds(getSavedJobIds());
    setPreferences(getPreferences());
    setJobStatuses(getAllJobStatuses());
  }, []);

  // Add match scores to all jobs
  const jobsWithScores = useMemo(() => {
    if (preferences && hasPreferences()) {
      return addMatchScores(jobs, preferences);
    }
    return jobs.map(job => ({ ...job, matchScore: 0 }));
  }, [preferences]);

  const filteredJobs = useMemo(() => {
    let result = jobsWithScores.filter((job) => {
      // Filter: Keyword search (title/company)
      const matchesKeyword =
        filters.keyword === "" ||
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.keyword.toLowerCase());

      // Filter: Location
      const matchesLocation =
        filters.location === "" || job.location === filters.location;

      // Filter: Mode
      const matchesMode = filters.mode === "" || job.mode === filters.mode;

      // Filter: Experience
      const matchesExperience =
        filters.experience === "" || job.experience === filters.experience;

      // Filter: Source
      const matchesSource =
        filters.source === "" || job.source === filters.source;

      // Filter: Status
      const jobStatus = jobStatuses[job.id] || "Not Applied";
      const matchesStatus =
        filters.status === "All" || jobStatus === filters.status;

      // Filter: Show only matches above threshold
      const matchesThreshold = !showOnlyMatches || 
        (preferences && job.matchScore >= preferences.minMatchScore);

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesMode &&
        matchesExperience &&
        matchesSource &&
        matchesStatus &&
        matchesThreshold
      );
    });

    // Sort jobs
    result = [...result].sort((a, b) => {
      switch (filters.sort) {
        case "latest":
          return a.postedDaysAgo - b.postedDaysAgo;
        case "matchScore":
          return (b.matchScore || 0) - (a.matchScore || 0);
        case "salary":
          // Simple sort by extracting first number from salary range
          const getSalaryValue = (salary: string) => {
            const match = salary.match(/(\d+)/);
            return match ? parseInt(match[1]) : 0;
          };
          return getSalaryValue(b.salaryRange) - getSalaryValue(a.salaryRange);
        case "experience":
          const expOrder = { Fresher: 0, "0-1": 1, "1-3": 2, "3-5": 3 };
          return expOrder[a.experience] - expOrder[b.experience];
        default:
          return 0;
      }
    });

    return result;
  }, [filters, jobsWithScores, showOnlyMatches, preferences]);

  const handleViewJob = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSaveJob = (jobId: string) => {
    if (isJobSaved(jobId)) {
      unsaveJob(jobId);
    } else {
      saveJob(jobId);
    }
    setSavedJobIds(getSavedJobIds());
  };

  const handleApply = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleStatusChange = (jobId: string, status: JobStatus, jobTitle: string, company: string) => {
    setJobStatus(jobId, status, jobTitle, company);
    setJobStatuses(getAllJobStatuses());
    setToastMessage(`Status updated: ${status}`);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const preferencesSet = !!(preferences && hasPreferences());

  return (
    <div className="page-container page-container--wide">
      <h1 className="page-heading">Dashboard</h1>
      <p className="page-subtext">
        Discover {jobs.length}+ opportunities from top Indian tech companies.
      </p>

      {/* Preferences Banner */}
      {!preferencesSet && (
        <div className="preferences-banner">
          <p>Set your preferences to activate intelligent matching.</p>
        </div>
      )}

      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        locations={locations}
      />

      {/* Match Toggle */}
      {preferencesSet && (
        <div className="match-toggle">
          <label className="match-toggle__label">
            <input
              type="checkbox"
              checked={showOnlyMatches}
              onChange={(e) => setShowOnlyMatches(e.target.checked)}
            />
            <span>Show only jobs above my threshold ({preferences?.minMatchScore}%)</span>
          </label>
        </div>
      )}

      {filteredJobs.length === 0 ? (
        <div className="empty-results">
          {showOnlyMatches ? (
            <>
              <h3>No roles match your criteria</h3>
              <p>Adjust filters or lower threshold.</p>
            </>
          ) : (
            <p>No jobs match your search.</p>
          )}
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobIds.includes(job.id)}
              status={jobStatuses[job.id] || "Not Applied"}
              onView={handleViewJob}
              onSave={handleSaveJob}
              onApply={handleApply}
              onStatusChange={handleStatusChange}
              showMatchScore={preferencesSet}
            />
          ))}
        </div>
      )}

      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveJob}
        onApply={handleApply}
        isSaved={selectedJob ? savedJobIds.includes(selectedJob.id) : false}
      />

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={handleCloseToast}
      />
    </div>
  );
};

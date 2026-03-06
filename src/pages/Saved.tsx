import { useState, useEffect, useMemo } from "react";
import { jobs, Job } from "../data/jobs";
import { JobCard } from "../components/JobCard";
import { JobModal } from "../components/JobModal";
import { Toast } from "../components/Toast";
import { getSavedJobIds, saveJob, unsaveJob, isJobSaved } from "../utils/storage";
import { JobStatus, getAllJobStatuses, setJobStatus } from "../utils/jobStatus";

export const Saved = () => {
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobStatuses, setJobStatuses] = useState<Record<string, JobStatus>>({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setSavedJobIds(getSavedJobIds());
    setJobStatuses(getAllJobStatuses());
  }, []);

  const savedJobs = useMemo(() => {
    return jobs.filter((job) => savedJobIds.includes(job.id));
  }, [savedJobIds]);

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

  return (
    <div className="page-container page-container--wide">
      <h1 className="page-heading">Saved</h1>
      
      {savedJobs.length === 0 ? (
        <div className="premium-empty-state">
          <h2 className="premium-empty-state__title">No saved jobs yet</h2>
          <p className="premium-empty-state__text">
            Your saved opportunities will appear here. Bookmark roles that match your criteria to review them later.
          </p>
        </div>
      ) : (
        <>
          <p className="page-subtext">
            You have {savedJobs.length} saved job{savedJobs.length !== 1 ? "s" : ""}.
          </p>
          <div className="jobs-grid">
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={true}
                status={jobStatuses[job.id] || "Not Applied"}
                onView={handleViewJob}
                onSave={handleSaveJob}
                onApply={handleApply}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </>
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

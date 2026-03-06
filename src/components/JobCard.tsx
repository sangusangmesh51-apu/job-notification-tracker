import { Job } from "../data/jobs";
import { SecondaryButton } from "./Button";
import { getMatchScoreColor } from "../utils/matchScore";
import { JobStatus, getStatusColor } from "../utils/jobStatus";

interface JobCardProps {
  job: Job & { matchScore?: number };
  isSaved: boolean;
  status: JobStatus;
  onView: (job: Job) => void;
  onSave: (jobId: string) => void;
  onApply: (url: string) => void;
  onStatusChange: (jobId: string, status: JobStatus, jobTitle: string, company: string) => void;
  showMatchScore?: boolean;
}

const STATUS_OPTIONS: JobStatus[] = ["Not Applied", "Applied", "Rejected", "Selected"];

export const JobCard = ({ 
  job, 
  isSaved, 
  status,
  onView, 
  onSave, 
  onApply, 
  onStatusChange,
  showMatchScore = false 
}: JobCardProps) => {
  const formatPostedTime = (days: number): string => {
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  const matchScoreColor = job.matchScore !== undefined ? getMatchScoreColor(job.matchScore) : null;
  const statusColor = getStatusColor(status);

  const handleStatusChange = (newStatus: JobStatus) => {
    onStatusChange(job.id, newStatus, job.title, job.company);
  };

  return (
    <div className="job-card">
      <div className="job-card__header">
        <div className="job-card__title-section">
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__company">{job.company}</p>
        </div>
        <div className="job-card__badges">
          {showMatchScore && job.matchScore !== undefined && (
            <span className={`match-score-badge match-score-badge--${matchScoreColor}`}>
              {job.matchScore}%
            </span>
          )}
          <span className={`job-card__source job-card__source--${job.source.toLowerCase()}`}>
            {job.source}
          </span>
        </div>
      </div>

      <div className="job-card__details">
        <div className="job-card__detail">
          <span className="job-card__detail-label">Location</span>
          <span className="job-card__detail-value">{job.location} · {job.mode}</span>
        </div>
        <div className="job-card__detail">
          <span className="job-card__detail-label">Experience</span>
          <span className="job-card__detail-value">{job.experience}</span>
        </div>
        <div className="job-card__detail">
          <span className="job-card__detail-label">Salary</span>
          <span className="job-card__detail-value">{job.salaryRange}</span>
        </div>
      </div>

      <div className="job-card__posted">
        Posted {formatPostedTime(job.postedDaysAgo)}
      </div>

      {/* Status Section */}
      <div className="job-card__status-section">
        <span className={`status-badge status-badge--${statusColor}`}>
          {status}
        </span>
        <div className="status-buttons">
          {STATUS_OPTIONS.map((option) => (
            <button
              key={option}
              className={`status-button ${status === option ? "status-button--active" : ""}`}
              onClick={() => handleStatusChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="job-card__actions">
        <SecondaryButton onClick={() => onView(job)}>
          View
        </SecondaryButton>
        <SecondaryButton onClick={() => onSave(job.id)}>
          {isSaved ? "Saved" : "Save"}
        </SecondaryButton>
        <SecondaryButton onClick={() => onApply(job.applyUrl)}>
          Apply
        </SecondaryButton>
      </div>
    </div>
  );
};

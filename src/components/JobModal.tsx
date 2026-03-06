import { Job } from "../data/jobs";
import { SecondaryButton } from "./Button";

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (jobId: string) => void;
  onApply: (url: string) => void;
  isSaved: boolean;
}

export const JobModal = ({ job, isOpen, onClose, onSave, onApply, isSaved }: JobModalProps) => {
  if (!isOpen || !job) return null;

  const formatPostedTime = (days: number): string => {
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{job.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <p className="modal-company">{job.company}</p>
            <span className={`modal-source modal-source--${job.source.toLowerCase()}`}>
              {job.source}
            </span>
          </div>

          <div className="modal-details">
            <div className="modal-detail">
              <span className="modal-detail-label">Location</span>
              <span className="modal-detail-value">{job.location} · {job.mode}</span>
            </div>
            <div className="modal-detail">
              <span className="modal-detail-label">Experience</span>
              <span className="modal-detail-value">{job.experience}</span>
            </div>
            <div className="modal-detail">
              <span className="modal-detail-label">Salary</span>
              <span className="modal-detail-value">{job.salaryRange}</span>
            </div>
            <div className="modal-detail">
              <span className="modal-detail-label">Posted</span>
              <span className="modal-detail-value">{formatPostedTime(job.postedDaysAgo)}</span>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Description</h3>
            <p className="modal-description">{job.description}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Skills</h3>
            <div className="modal-skills">
              {job.skills.map((skill) => (
                <span key={skill} className="modal-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <SecondaryButton onClick={() => onSave(job.id)}>
            {isSaved ? "Saved" : "Save Job"}
          </SecondaryButton>
          <SecondaryButton onClick={() => onApply(job.applyUrl)}>
            Apply Now
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

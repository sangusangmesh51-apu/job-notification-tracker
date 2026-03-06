import { useState, useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { hasPreferences, getPreferences, UserPreferences } from "../utils/preferences";
import {
  DailyDigest,
  getTodaysDigest,
  generateDigest,
  formatDisplayDate,
  formatDigestForClipboard,
  createEmailDraft,
  getTodayDateString,
} from "../utils/digest";
import { getMatchScoreColor } from "../utils/matchScore";
import { getStatusHistory, formatStatusDate, StatusUpdate, getStatusColor } from "../utils/jobStatus";

export const Digest = () => {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [digest, setDigest] = useState<DailyDigest | null>(null);
  const [copied, setCopied] = useState(false);
  const [hasPrefs, setHasPrefs] = useState(false);
  const [statusHistory, setStatusHistory] = useState<StatusUpdate[]>([]);

  useEffect(() => {
    const prefs = getPreferences();
    setPreferences(prefs);
    setHasPrefs(hasPreferences());
    setStatusHistory(getStatusHistory());

    // Load existing digest for today if available
    const existingDigest = getTodaysDigest();
    if (existingDigest) {
      setDigest(existingDigest);
    }
  }, []);

  const handleGenerateDigest = () => {
    if (preferences && hasPreferences()) {
      const newDigest = generateDigest(preferences);
      setDigest(newDigest);
    }
  };

  const handleCopyToClipboard = async () => {
    if (digest) {
      const text = formatDigestForClipboard(digest);
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Fallback for browsers that don't support clipboard API
        alert("Copy failed. Please try the email option instead.");
      }
    }
  };

  const handleCreateEmailDraft = () => {
    if (digest) {
      const mailtoUrl = createEmailDraft(digest);
      window.location.href = mailtoUrl;
    }
  };

  const handleApply = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Blocking state: No preferences set
  if (!hasPrefs) {
    return (
      <div className="page-container">
        <h1 className="page-heading">Digest</h1>
        <div className="digest-blocking-state">
          <h2 className="digest-blocking-state__title">Set preferences to generate a personalized digest.</h2>
          <p className="digest-blocking-state__text">
            Configure your job preferences in the Settings page to receive a daily 9AM digest tailored to your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container digest-page">
      <h1 className="page-heading">Digest</h1>

      {/* Demo Mode Note */}
      <div className="demo-note">
        Demo Mode: Daily 9AM trigger simulated manually.
      </div>

      {/* Generate Button */}
      {!digest && (
        <div className="digest-generate-section">
          <PrimaryButton onClick={handleGenerateDigest}>
            Generate Today's 9AM Digest (Simulated)
          </PrimaryButton>
        </div>
      )}

      {/* Digest Content */}
      {digest ? (
        <div className="digest-email-container">
          <div className="digest-email-card">
            {/* Header */}
            <div className="digest-header">
              <h2 className="digest-header__title">Top 10 Jobs For You — 9AM Digest</h2>
              <p className="digest-header__date">{formatDisplayDate(digest.date)}</p>
            </div>

            {/* Job List */}
            <div className="digest-job-list">
              {digest.jobs.length === 0 ? (
                <div className="digest-empty-matches">
                  <h3>No matching roles today.</h3>
                  <p>Check again tomorrow.</p>
                </div>
              ) : (
                digest.jobs.map((job, index) => (
                  <div key={job.id} className="digest-job-item">
                    <div className="digest-job-number">{index + 1}</div>
                    <div className="digest-job-content">
                      <h3 className="digest-job-title">{job.title}</h3>
                      <p className="digest-job-company">{job.company}</p>
                      <div className="digest-job-details">
                        <span>{job.location}</span>
                        <span className="digest-job-separator">·</span>
                        <span>{job.experience}</span>
                        <span className="digest-job-separator">·</span>
                        <span className={`digest-job-score digest-job-score--${getMatchScoreColor(job.matchScore)}`}>
                          {job.matchScore}% match
                        </span>
                      </div>
                    </div>
                    <div className="digest-job-action">
                      <SecondaryButton onClick={() => handleApply(job.applyUrl)}>
                        Apply
                      </SecondaryButton>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="digest-footer">
              <p>This digest was generated based on your preferences.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="digest-actions">
            <SecondaryButton onClick={handleCopyToClipboard}>
              {copied ? "Copied!" : "Copy Digest to Clipboard"}
            </SecondaryButton>
            <SecondaryButton onClick={handleCreateEmailDraft}>
              Create Email Draft
            </SecondaryButton>
          </div>
        </div>
      ) : null}

      {/* Recent Status Updates Section */}
      {statusHistory.length > 0 && (
        <div className="status-updates-section">
          <h2 className="status-updates-title">Recent Status Updates</h2>
          <div className="status-updates-list">
            {statusHistory.slice(0, 10).map((update) => (
              <div key={`${update.jobId}-${update.timestamp}`} className="status-update-item">
                <div className="status-update-info">
                  <span className="status-update-job">{update.jobTitle}</span>
                  <span className="status-update-company">{update.company}</span>
                </div>
                <div className="status-update-meta">
                  <span className={`status-update-badge status-update-badge--${getStatusColor(update.status)}`}>
                    {update.status}
                  </span>
                  <span className="status-update-date">{formatStatusDate(update.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

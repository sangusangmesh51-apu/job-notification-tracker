export type JobStatus = "Not Applied" | "Applied" | "Rejected" | "Selected";

export interface StatusUpdate {
  jobId: string;
  jobTitle: string;
  company: string;
  status: JobStatus;
  timestamp: number;
}

const STATUS_KEY = "jobTrackerStatus";
const STATUS_HISTORY_KEY = "jobTrackerStatusHistory";

export const getJobStatus = (jobId: string): JobStatus => {
  try {
    const stored = localStorage.getItem(STATUS_KEY);
    if (stored) {
      const statuses: Record<string, JobStatus> = JSON.parse(stored);
      return statuses[jobId] || "Not Applied";
    }
  } catch {
    // Silently fail
  }
  return "Not Applied";
};

export const getAllJobStatuses = (): Record<string, JobStatus> => {
  try {
    const stored = localStorage.getItem(STATUS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Silently fail
  }
  return {};
};

export const setJobStatus = (
  jobId: string,
  status: JobStatus,
  jobTitle?: string,
  company?: string
): void => {
  try {
    const statuses = getAllJobStatuses();
    statuses[jobId] = status;
    localStorage.setItem(STATUS_KEY, JSON.stringify(statuses));

    // Also record in history if job details provided
    if (jobTitle && company) {
      recordStatusUpdate(jobId, jobTitle, company, status);
    }
  } catch {
    // Silently fail
  }
};

export const getStatusColor = (status: JobStatus): string => {
  switch (status) {
    case "Not Applied":
      return "neutral";
    case "Applied":
      return "blue";
    case "Rejected":
      return "red";
    case "Selected":
      return "green";
    default:
      return "neutral";
  }
};

// Status history for digest page
export const recordStatusUpdate = (
  jobId: string,
  jobTitle: string,
  company: string,
  status: JobStatus
): void => {
  try {
    const history = getStatusHistory();
    const update: StatusUpdate = {
      jobId,
      jobTitle,
      company,
      status,
      timestamp: Date.now(),
    };

    // Add to beginning, keep only last 20 updates
    const updatedHistory = [update, ...history].slice(0, 20);
    localStorage.setItem(STATUS_HISTORY_KEY, JSON.stringify(updatedHistory));
  } catch {
    // Silently fail
  }
};

export const getStatusHistory = (): StatusUpdate[] => {
  try {
    const stored = localStorage.getItem(STATUS_HISTORY_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Silently fail
  }
  return [];
};

export const formatStatusDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

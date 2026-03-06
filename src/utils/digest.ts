import { Job } from "../data/jobs";
import { UserPreferences } from "./preferences";
import { addMatchScores } from "./matchScore";
import { jobs } from "../data/jobs";

export interface DigestJob {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  matchScore: number;
  applyUrl: string;
}

export interface DailyDigest {
  date: string;
  jobs: DigestJob[];
  generatedAt: number;
}

const getDigestKey = (date: string): string => `jobTrackerDigest_${date}`;

export const getTodayDateString = (): string => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // YYYY-MM-DD
};

export const formatDisplayDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getTodaysDigest = (): DailyDigest | null => {
  try {
    const today = getTodayDateString();
    const key = getDigestKey(today);
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Silently fail
  }
  return null;
};

export const saveDigest = (digest: DailyDigest): void => {
  try {
    const key = getDigestKey(digest.date);
    localStorage.setItem(key, JSON.stringify(digest));
  } catch {
    // Silently fail
  }
};

export const generateDigest = (preferences: UserPreferences): DailyDigest => {
  // Add match scores to all jobs
  const jobsWithScores = addMatchScores(jobs, preferences);

  // Sort by: 1) matchScore descending, 2) postedDaysAgo ascending
  const sortedJobs = [...jobsWithScores].sort((a, b) => {
    if (b.matchScore !== a.matchScore) {
      return b.matchScore - a.matchScore;
    }
    return a.postedDaysAgo - b.postedDaysAgo;
  });

  // Take top 10
  const topJobs = sortedJobs.slice(0, 10);

  // Map to digest format
  const digestJobs: DigestJob[] = topJobs.map((job) => ({
    id: job.id,
    title: job.title,
    company: job.company,
    location: job.location,
    experience: job.experience,
    matchScore: job.matchScore,
    applyUrl: job.applyUrl,
  }));

  const digest: DailyDigest = {
    date: getTodayDateString(),
    jobs: digestJobs,
    generatedAt: Date.now(),
  };

  saveDigest(digest);
  return digest;
};

export const getOrGenerateDigest = (
  preferences: UserPreferences
): DailyDigest => {
  const existing = getTodaysDigest();
  if (existing) {
    return existing;
  }
  return generateDigest(preferences);
};

export const formatDigestForClipboard = (digest: DailyDigest): string => {
  const date = formatDisplayDate(digest.date);
  let text = "Top 10 Jobs For You — 9AM Digest\n";
  text += `${date}\n`;
  text += "=".repeat(50) + "\n\n";

  digest.jobs.forEach((job, index) => {
    text += `${index + 1}. ${job.title}\n`;
    text += `   Company: ${job.company}\n`;
    text += `   Location: ${job.location}\n`;
    text += `   Experience: ${job.experience}\n`;
    text += `   Match Score: ${job.matchScore}%\n`;
    text += `   Apply: ${job.applyUrl}\n\n`;
  });

  text += "-".repeat(50) + "\n";
  text += "This digest was generated based on your preferences.\n";

  return text;
};

export const createEmailDraft = (digest: DailyDigest): string => {
  const subject = encodeURIComponent("My 9AM Job Digest");
  const body = encodeURIComponent(formatDigestForClipboard(digest));
  return `mailto:?subject=${subject}&body=${body}`;
};

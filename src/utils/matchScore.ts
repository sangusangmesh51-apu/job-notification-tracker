import { Job } from "../data/jobs";
import { UserPreferences, parseKeywords, parseSkills } from "./preferences";

export interface JobWithMatchScore extends Job {
  matchScore: number;
}

export const calculateMatchScore = (
  job: Job,
  preferences: UserPreferences
): number => {
  let score = 0;

  const keywords = parseKeywords(preferences.roleKeywords);
  const userSkills = parseSkills(preferences.skills);

  // +25 if any roleKeyword appears in job.title (case-insensitive)
  if (keywords.length > 0) {
    const titleLower = job.title.toLowerCase();
    const hasKeywordInTitle = keywords.some((keyword) =>
      titleLower.includes(keyword)
    );
    if (hasKeywordInTitle) {
      score += 25;
    }

    // +15 if any roleKeyword appears in job.description
    const descriptionLower = job.description.toLowerCase();
    const hasKeywordInDescription = keywords.some((keyword) =>
      descriptionLower.includes(keyword)
    );
    if (hasKeywordInDescription) {
      score += 15;
    }
  }

  // +15 if job.location matches preferredLocations
  if (
    preferences.preferredLocations.length > 0 &&
    preferences.preferredLocations.includes(job.location)
  ) {
    score += 15;
  }

  // +10 if job.mode matches preferredMode
  if (
    preferences.preferredMode.length > 0 &&
    preferences.preferredMode.includes(job.mode)
  ) {
    score += 10;
  }

  // +10 if job.experience matches experienceLevel
  if (
    preferences.experienceLevel !== "" &&
    job.experience === preferences.experienceLevel
  ) {
    score += 10;
  }

  // +15 if overlap between job.skills and user.skills (any match)
  if (userSkills.length > 0) {
    const jobSkillsLower = job.skills.map((s) => s.toLowerCase());
    const hasSkillMatch = userSkills.some((skill) =>
      jobSkillsLower.includes(skill)
    );
    if (hasSkillMatch) {
      score += 15;
    }
  }

  // +5 if postedDaysAgo <= 2
  if (job.postedDaysAgo <= 2) {
    score += 5;
  }

  // +5 if source is LinkedIn
  if (job.source === "LinkedIn") {
    score += 5;
  }

  // Cap score at 100
  return Math.min(score, 100);
};

export const getMatchScoreColor = (score: number): string => {
  if (score >= 80) return "green";
  if (score >= 60) return "amber";
  if (score >= 40) return "neutral";
  return "grey";
};

export const addMatchScores = (
  jobs: Job[],
  preferences: UserPreferences
): JobWithMatchScore[] => {
  return jobs.map((job) => ({
    ...job,
    matchScore: calculateMatchScore(job, preferences),
  }));
};

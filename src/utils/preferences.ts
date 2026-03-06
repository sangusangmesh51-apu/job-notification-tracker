import { WorkMode, ExperienceLevel } from "../data/jobs";

export interface UserPreferences {
  roleKeywords: string;
  preferredLocations: string[];
  preferredMode: WorkMode[];
  experienceLevel: ExperienceLevel | "";
  skills: string;
  minMatchScore: number;
}

const PREFERENCES_KEY = "jobTrackerPreferences";

export const DEFAULT_PREFERENCES: UserPreferences = {
  roleKeywords: "",
  preferredLocations: [],
  preferredMode: [],
  experienceLevel: "",
  skills: "",
  minMatchScore: 40,
};

export const getPreferences = (): UserPreferences => {
  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    if (stored) {
      return { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) };
    }
  } catch {
    // Silently fail if localStorage is not available
  }
  return { ...DEFAULT_PREFERENCES };
};

export const savePreferences = (preferences: UserPreferences): void => {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  } catch {
    // Silently fail if localStorage is not available
  }
};

export const hasPreferences = (): boolean => {
  const prefs = getPreferences();
  return (
    prefs.roleKeywords !== "" ||
    prefs.preferredLocations.length > 0 ||
    prefs.preferredMode.length > 0 ||
    prefs.experienceLevel !== "" ||
    prefs.skills !== ""
  );
};

export const parseKeywords = (keywords: string): string[] => {
  return keywords
    .split(",")
    .map((k) => k.trim().toLowerCase())
    .filter((k) => k.length > 0);
};

export const parseSkills = (skills: string): string[] => {
  return skills
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 0);
};

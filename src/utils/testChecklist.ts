export interface TestItem {
  id: string;
  label: string;
  tooltip: string;
  checked: boolean;
}

export const DEFAULT_TEST_ITEMS: TestItem[] = [
  {
    id: "preferences-persist",
    label: "Preferences persist after refresh",
    tooltip: "Set preferences in Settings, refresh page, verify they remain",
    checked: false,
  },
  {
    id: "match-score",
    label: "Match score calculates correctly",
    tooltip: "Check that jobs show match scores based on your preferences",
    checked: false,
  },
  {
    id: "show-matches-toggle",
    label: '"Show only matches" toggle works',
    tooltip: "Enable toggle on Dashboard, verify only jobs above threshold show",
    checked: false,
  },
  {
    id: "save-job-persist",
    label: "Save job persists after refresh",
    tooltip: "Save a job, refresh page, verify it appears in Saved page",
    checked: false,
  },
  {
    id: "apply-new-tab",
    label: "Apply opens in new tab",
    tooltip: "Click Apply on any job, verify it opens in new tab",
    checked: false,
  },
  {
    id: "status-persist",
    label: "Status update persists after refresh",
    tooltip: "Change job status, refresh page, verify status remains",
    checked: false,
  },
  {
    id: "status-filter",
    label: "Status filter works correctly",
    tooltip: "Use Status filter on Dashboard, verify correct jobs show",
    checked: false,
  },
  {
    id: "digest-generate",
    label: "Digest generates top 10 by score",
    tooltip: "Generate digest, verify top 10 jobs by match score appear",
    checked: false,
  },
  {
    id: "digest-persist",
    label: "Digest persists for the day",
    tooltip: "Generate digest, refresh page, verify same digest loads",
    checked: false,
  },
  {
    id: "no-console-errors",
    label: "No console errors on main pages",
    tooltip: "Open browser console, navigate all pages, verify no errors",
    checked: false,
  },
];

const TEST_STATUS_KEY = "jobTrackerTestStatus";

export const getTestStatus = (): TestItem[] => {
  try {
    const stored = localStorage.getItem(TEST_STATUS_KEY);
    if (stored) {
      const parsed: TestItem[] = JSON.parse(stored);
      // Merge with defaults to handle any new items
      const storedMap = new Map<string, boolean>(parsed.map((item) => [item.id, item.checked]));
      return DEFAULT_TEST_ITEMS.map((item) => ({
        ...item,
        checked: storedMap.get(item.id) ?? false,
      }));
    }
  } catch {
    // Silently fail
  }
  return [...DEFAULT_TEST_ITEMS];
};

export const saveTestStatus = (items: TestItem[]): void => {
  try {
    localStorage.setItem(TEST_STATUS_KEY, JSON.stringify(items));
  } catch {
    // Silently fail
  }
};

export const toggleTestItem = (items: TestItem[], id: string): TestItem[] => {
  return items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
};

export const getPassedCount = (items: TestItem[]): number => {
  return items.filter((item) => item.checked).length;
};

export const areAllTestsPassed = (items: TestItem[]): boolean => {
  return items.every((item) => item.checked);
};

export const resetTestStatus = (): TestItem[] => {
  const reset = [...DEFAULT_TEST_ITEMS];
  saveTestStatus(reset);
  return reset;
};

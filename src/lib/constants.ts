export const PLAN_CAP = 5;

// Shared localStorage keys — the workout details page's "Add to plan" /
// "Save for later" buttons should write to these same keys later.
export const STORAGE_KEYS = {
  plan: "fitlog:plan",
  saved: "fitlog:saved",
  done: "fitlog:done",
} as const;

"use client";

import { FiChevronDown } from "react-icons/fi";
import type { SortKey } from "./MyPlanView";

const OPTIONS: { label: string; value: SortKey }[] = [
  { label: "Duration", value: "duration" },
  { label: "Calories", value: "caloriesBurned" },
  { label: "Rating", value: "rating" },
];

export default function SortDropdown({ value, onChange }: { value: SortKey; onChange: (v: SortKey) => void }) {
  return (
    <label className="flex items-center gap-2 text-xs text-base-content/50">
      Sort By
      <span className="relative">
        <select
          className="appearance-none rounded-md border border-base-300 bg-base-200 py-1.5 pl-3 pr-7 text-xs font-medium text-base-content focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
        >
          {OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <FiChevronDown className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2" aria-hidden />
      </span>
    </label>
  );
}

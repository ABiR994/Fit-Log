export type PlanTab = "plan" | "saved";

interface Props {
  active: PlanTab;
  onChange: (tab: PlanTab) => void;
  planCount: number;
  savedCount: number;
}

export default function PlanTabs({ active, onChange, planCount, savedCount }: Props) {
  const tabs: { key: PlanTab; label: string; count: number }[] = [
    { key: "plan", label: "Today's Plan", count: planCount },
    { key: "saved", label: "Saved", count: savedCount },
  ];

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-base-300 bg-base-200 p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          onClick={() => onChange(t.key)}
          aria-pressed={active === t.key}
          className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-colors ${
            active === t.key
              ? "bg-base-300 text-base-content"
              : "text-base-content/50 hover:text-base-content/80"
          }`}
        >
          {t.label} ({t.count})
        </button>
      ))}
    </div>
  );
}

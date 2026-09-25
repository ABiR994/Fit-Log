import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-base-300 bg-base-200 px-4 py-16 text-center">
      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-base-content">
        Nothing here yet
      </h3>
      <p className="max-w-xs text-sm text-base-content/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-3 h-9 min-h-0 rounded-md border-0 px-5 text-xs font-bold uppercase tracking-wide shadow-none"
      >
        Go to workouts
      </Link>
    </div>
  );
}

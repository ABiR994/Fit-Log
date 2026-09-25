import type { Workout } from "@/types/workout";

export default function MetricsSummary({ workouts }: { workouts: Workout[] }) {
  const exercises = workouts.length;
  const minutes = workouts.reduce((sum, w) => sum + w.duration, 0);
  const calories = workouts.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="grid grid-cols-3 divide-x divide-base-300 rounded-xl border border-base-300 bg-base-200">
      <div className="px-4 py-4 sm:px-6">
        <p className="text-xs uppercase tracking-wide text-base-content/45">Exercises</p>
        <p className="mt-1 font-display text-2xl font-bold text-primary sm:text-3xl">{exercises}</p>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <p className="text-xs uppercase tracking-wide text-base-content/45">Minutes</p>
        <p className="mt-1 font-display text-2xl font-bold text-base-content sm:text-3xl">{minutes}</p>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <p className="text-xs uppercase tracking-wide text-base-content/45">Calories</p>
        <p className="mt-1 font-display text-2xl font-bold text-base-content sm:text-3xl">{calories}</p>
      </div>
    </div>
  );
}

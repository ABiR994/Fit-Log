import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

export default function Library({ workouts }: { workouts: Workout[] }) {
  return (
    <section id="library" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 md:px-6">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold uppercase text-base-content sm:text-4xl">
          The Library
        </h2>
        <p className="mt-1 text-sm text-base-content/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* 1 col mobile → 2 tablet → 3 desktop (3x4 grid for 12 items) */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}

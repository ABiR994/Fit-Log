import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiZap } from "react-icons/fi";
import type { Workout } from "@/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="group block overflow-hidden rounded-xl border border-base-300 bg-base-200 transition-colors hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-base-300">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="space-y-2.5 p-4">
        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5">
          {muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="font-display text-base font-bold uppercase leading-snug text-base-content">
          {name}
        </h3>

        {/* Equipment */}
        <p className="text-xs text-base-content/50">{equipment}</p>

        {/* Stats row */}
        <div className="flex items-center gap-4 pt-1 text-xs text-base-content/70">
          <span className="flex items-center gap-1">
            <FiClock className="size-3.5 text-primary" aria-hidden />
            {duration} min
          </span>
          <span className="flex items-center gap-1">
            <FiZap className="size-3.5 text-primary" aria-hidden />
            {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <FiStar className="size-3.5 text-primary" aria-hidden />
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

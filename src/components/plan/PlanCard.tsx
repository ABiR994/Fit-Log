import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiClock, FiStar, FiX, FiZap } from "react-icons/fi";
import type { Workout } from "@/types/workout";

interface Props {
  workout: Workout;
  done?: boolean;
  onMarkDone?: () => void;
  onRemove: () => void;
}

export default function PlanCard({ workout, done, onMarkDone, onRemove }: Props) {
  const { id, name, image, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-base-300 bg-base-200 p-3 sm:flex-row sm:items-center sm:gap-4">
      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-base-300 sm:h-16 sm:w-16">
        <Image src={image} alt={name} fill sizes="128px" className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className={`font-display text-sm font-bold uppercase tracking-wide text-base-content ${
            done ? "text-base-content/40 line-through" : ""
          }`}
        >
          {name}
        </h3>
        <p className="mt-0.5 text-xs text-base-content/45">{equipment}</p>
        <div className="mt-1.5 flex items-center gap-3 text-xs text-base-content/60">
          <span className="flex items-center gap-1">
            <FiClock className="size-3.5 text-primary" aria-hidden /> {duration} min
          </span>
          <span className="flex items-center gap-1">
            <FiZap className="size-3.5 text-primary" aria-hidden /> {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <FiStar className="size-3.5 text-primary" aria-hidden /> {rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-auto">
        <Link
          href={`/workouts/${id}`}
          className="btn btn-outline h-8 min-h-0 rounded-md border-base-300 px-3 text-xs font-semibold text-base-content hover:border-base-content hover:bg-transparent"
        >
          View Details
        </Link>

        {onMarkDone && (
          <button
            type="button"
            onClick={onMarkDone}
            disabled={done}
            className="btn btn-primary h-8 min-h-0 gap-1.5 rounded-md border-0 px-3 text-xs font-bold shadow-none disabled:bg-base-300 disabled:text-base-content/40"
          >
            <FiCheck className="size-3.5" aria-hidden />
            {done ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
          className="btn btn-square btn-ghost h-8 min-h-0 w-8 rounded-md text-base-content/50 hover:bg-base-300 hover:text-base-content"
        >
          <FiX className="size-4" aria-hidden />
        </button>
      </div>
    </article>
  );
}

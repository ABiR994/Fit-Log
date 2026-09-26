"use client";

import Image from "next/image";
import { FiBookmark, FiPlusCircle, FiStar } from "react-icons/fi";
import { toast } from "react-toastify";
import { usePlanStorage } from "@/hooks/usePlanStorage";
import { PLAN_CAP, STORAGE_KEYS } from "@/lib/constants";
import type { Workout } from "@/types/workout";

export default function WorkoutDetails({ workout }: { workout: Workout }) {
  const {
    id,
    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workout;

  const [planIds, setPlanIds] = usePlanStorage(STORAGE_KEYS.plan);
  const [savedIds, setSavedIds] = usePlanStorage(STORAGE_KEYS.saved);

  const inPlan = planIds.includes(id);
  const inSaved = savedIds.includes(id);
  const planFull = planIds.length >= PLAN_CAP;

  const specs: [string, string | number][] = [
    ["Equipment", equipment],
    ["Difficulty", difficulty],
    ["Sets", sets],
    ["Reps", reps],
    ["Duration", `${duration} min`],
    ["Calories", `${caloriesBurned} kcal`],
    ["Rating", rating],
  ];

  const handleAddToPlan = () => {
    if (inPlan) return toast.info("Already in today's plan");
    if (planFull) return toast.warn(`Today's plan is full (max ${PLAN_CAP})`);
    setPlanIds([...planIds, id]);
    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    if (inSaved) return toast.info("Already saved");
    setSavedIds([...savedIds, id]);
    toast.success("Saved for later");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: media */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-base-200 sm:aspect-[4/3] lg:aspect-[3/4]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right: content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-bold uppercase leading-tight text-base-content sm:text-4xl">
              {name}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-base-content/60">{description}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {muscleGroups.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-primary-content"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key specs panel */}
          <dl className="divide-y divide-base-300 rounded-xl border border-base-300 bg-base-200">
            {specs.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between px-4 py-3 text-sm">
                <dt className="font-semibold uppercase tracking-wide text-base-content/45">{label}</dt>
                <dd className="flex items-center gap-1 font-medium text-base-content">
                  {label === "Rating" && <FiStar className="size-3.5 text-primary" aria-hidden />}
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Instructions */}
          <div>
            <h2 className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-base-content">
              Instructions
            </h2>
            <ol className="space-y-2.5">
              {instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-base-content/70">
                  <span className="font-semibold text-primary">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              type="button"
              onClick={handleAddToPlan}
              disabled={inPlan || planFull}
              className="btn btn-primary h-10 min-h-0 gap-2 rounded-md border-0 px-5 text-xs font-bold uppercase tracking-wide shadow-none disabled:bg-base-300 disabled:text-base-content/40"
            >
              <FiPlusCircle className="size-4" aria-hidden />
              {inPlan ? "In today's plan" : planFull ? "Plan is full" : "Add to today's plan"}
            </button>
            <button
              type="button"
              onClick={handleSaveForLater}
              disabled={inSaved}
              className="btn btn-outline h-10 min-h-0 gap-2 rounded-md border-base-300 px-5 text-xs font-bold uppercase tracking-wide text-base-content hover:border-base-content hover:bg-transparent disabled:border-base-300 disabled:text-base-content/40"
            >
              <FiBookmark className="size-4" aria-hidden />
              {inSaved ? "Saved" : "Save for later"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

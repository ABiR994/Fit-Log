"use client";

import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import EmptyState from "./EmptyState";
import MetricsSummary from "./MetricsSummary";
import PlanCard from "./PlanCard";
import PlanTabs, { type PlanTab } from "./PlanTabs";
import SortDropdown from "./SortDropdown";
import { usePlanStorage } from "@/hooks/usePlanStorage";
import { STORAGE_KEYS } from "@/lib/constants";
import type { Workout } from "@/types/workout";

export type SortKey = "duration" | "caloriesBurned" | "rating";

export default function MyPlanView({ workouts }: { workouts: Workout[] }) {
  const [planIds, setPlanIds, planHydrated] = usePlanStorage(STORAGE_KEYS.plan);
  const [savedIds, setSavedIds, savedHydrated] = usePlanStorage(STORAGE_KEYS.saved);
  const [doneIds, setDoneIds, doneHydrated] = usePlanStorage(STORAGE_KEYS.done);

  const [tab, setTab] = useState<PlanTab>("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const hydrated = planHydrated && savedHydrated && doneHydrated;

  const planWorkouts = useMemo(
    () => workouts.filter((w) => planIds.includes(w.id)),
    [workouts, planIds],
  );
  const savedWorkouts = useMemo(
    () => workouts.filter((w) => savedIds.includes(w.id)),
    [workouts, savedIds],
  );

  const list = tab === "plan" ? planWorkouts : savedWorkouts;
  const sortedList = useMemo(
    () => [...list].sort((a, b) => a[sortBy] - b[sortBy]),
    [list, sortBy],
  );

  const removeFromPlan = (workout: Workout) => {
    setPlanIds(planIds.filter((x) => x !== workout.id));
    toast.info(`Removed "${workout.name}" from today's plan`);
  };
  const removeFromSaved = (workout: Workout) => {
    setSavedIds(savedIds.filter((x) => x !== workout.id));
    toast.info(`Removed "${workout.name}" from saved`);
  };
  const markDone = (workout: Workout) => {
    if (doneIds.includes(workout.id)) return;
    setDoneIds([...doneIds, workout.id]);
    toast.success(`"${workout.name}" marked as done`);
  };

  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-6">
      <header>
        <h1 className="font-display text-3xl font-bold uppercase text-base-content sm:text-4xl">
          My Plan
        </h1>
        <p className="mt-1 text-sm text-base-content/50">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </header>

      <MetricsSummary workouts={planWorkouts} />

      {!hydrated ? (
        <Spinner label="Loading workouts…" />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <PlanTabs
              active={tab}
              onChange={setTab}
              planCount={planWorkouts.length}
              savedCount={savedWorkouts.length}
            />
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          {sortedList.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {sortedList.map((w) => (
                <PlanCard
                  key={w.id}
                  workout={w}
                  done={doneIds.includes(w.id)}
                  onMarkDone={tab === "plan" ? () => markDone(w) : undefined}
                  onRemove={() => (tab === "plan" ? removeFromPlan(w) : removeFromSaved(w))}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

import type { Workout } from "@/types/workout";

const API_BASE = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(API_BASE, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch workouts");
  return res.json();
}

export async function getWorkout(id: string | number): Promise<Workout | null> {
  const res = await fetch(`${API_BASE}/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return data && typeof data === "object" && "id" in data ? (data as Workout) : null;
}

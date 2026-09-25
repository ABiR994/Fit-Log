import type { Metadata } from "next";
import MyPlanView from "@/components/plan/MyPlanView";
import { getWorkouts } from "@/lib/api";

export const metadata: Metadata = { title: "My Plan" };

export default async function MyPlanPage() {
  const workouts = await getWorkouts();
  return <MyPlanView workouts={workouts} />;
}

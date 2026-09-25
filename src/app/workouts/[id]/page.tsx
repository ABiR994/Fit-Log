import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/WorkoutDetails";
import { getWorkout } from "@/lib/api";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const workout = await getWorkout(id);
  return { title: workout ? workout.name : "Workout" };
}

export default async function WorkoutDetailsPage({ params }: Props) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  return <WorkoutDetails workout={workout} />;
}

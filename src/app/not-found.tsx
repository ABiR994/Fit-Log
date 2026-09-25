import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-display text-7xl font-bold text-primary sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-base-content sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-base-content/50">
        That page doesn&apos;t exist. It may have been moved, or the link is off.
      </p>

      <Link
        href="/"
        className="btn btn-primary mt-8 h-10 min-h-0 gap-2 rounded-md border-0 px-5 text-xs font-bold uppercase tracking-wide shadow-none"
      >
        <FiArrowLeft className="size-4" aria-hidden />
        Back to workouts
      </Link>
    </section>
  );
}

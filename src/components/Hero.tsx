import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import banner from "@/assets/banner.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <div className="grid items-center gap-8 rounded-2xl border border-base-300 bg-base-200 px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-4 md:px-14 md:py-14 lg:py-16">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Workout Library
          </p>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] text-base-content sm:text-6xl md:text-5xl lg:text-[3.4rem]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-base-content/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch
            the week&apos;s work add up.
          </p>

          {/* Anchor link to the #library section*/}
          <a
            href="#library"
            className="btn btn-primary mt-7 h-10 min-h-0 gap-2 rounded-md border-0 px-5 shadow-none text-xs font-bold uppercase tracking-wide"
          >
            Browse Workouts
            <FiArrowDown aria-hidden className="size-4" />
          </a>
        </div>

        {/* Right: banner image */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end lg:justify-center">
          <Image
            src={banner}
            alt="Muscle anatomy figure working out on a preacher curl machine"
            priority
            sizes="(min-width: 768px) 340px, 260px"
            className="h-auto w-56 sm:w-64 md:w-72 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}

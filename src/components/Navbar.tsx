"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
}

export default function Navbar({ planCount = 0, savedCount = 0 }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-y-3 px-4 py-3 md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-4"
      >
        {/* Left: logo */}
        <Link href="/" className="flex w-fit items-center gap-2.5" aria-label="FitLog home">
          <Image src={logo} alt="" width={28} height={28} priority />
          <span className="font-display text-xl font-bold uppercase tracking-wide text-base-content">
            FitLog
          </span>
        </Link>

        {/* Middle: links */}
        <ul className="order-3 col-span-2 flex items-center justify-center gap-2 md:order-none md:col-span-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    active
                      ? "bg-primary/15 font-semibold text-primary"
                      : "font-medium text-base-content/70 hover:text-base-content"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: counters */}
        <div className="flex items-center justify-end gap-4 text-sm">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-base-content/90 hover:text-base-content"
            aria-label={`Plan: ${planCount} exercises`}
          >
            Plan
            <span className="grid size-5 place-items-center rounded-full bg-primary text-xs font-bold text-primary-content">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-base-content/70 hover:text-base-content"
            aria-label={`Saved: ${savedCount} exercises`}
          >
            Saved
            <span className="grid size-5 place-items-center rounded-full border border-base-content/40 text-xs font-medium text-base-content">
              {savedCount}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

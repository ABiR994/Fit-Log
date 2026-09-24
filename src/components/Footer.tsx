import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left md:px-6">
        {/* Left: brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="FitLog home">
          <Image src={logo} alt="" width={20} height={20} />
          <span className="font-display text-sm font-bold uppercase tracking-wide text-base-content">
            FitLog
          </span>
        </Link>

        {/* Right: copyright */}
        <p className="text-xs text-base-content/50">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

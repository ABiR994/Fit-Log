import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "@fontsource-variable/oswald";
import "@fontsource-variable/inter";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="fitlog">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastContainer position="top-right" theme="dark" autoClose={2500} />
      </body>
    </html>
  );
}

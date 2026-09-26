<div align="center">

# 💪 FitLog — Workout Library

### Pick a lift. Lock it into today's plan. Watch the week's work add up.

A dark, no-nonsense gym companion built with Next.js, TypeScript, and Tailwind CSS.
Browse a library of workouts, drill into full instructions and specs, then build out
today's plan and track it to done.

<br />

<a href="https://fit-log-flame.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-ccff00?style=for-the-badge&logo=vercel&logoColor=black" alt="Live Demo" />
</a>
<a href="https://github.com/ABiR994/Fit-Log">
  <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
</a>

<br />
<br />

<img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/DaisyUI-5-1AD1A5?style=flat-square" alt="DaisyUI" />
<img src="https://img.shields.io/badge/React_Toastify-Notifications-FF6B6B?style=flat-square" alt="React Toastify" />

</div>

---

## 📖 About the Project

**FitLog** turns a flat list of workouts into something you can actually plan a day around.
Every lift is shown as a card with its muscle group, equipment, and stats, and clicking
through gives you the full breakdown — sets, reps, difficulty, and step-by-step instructions.

From there you build **Today's Plan**: add lifts (capped at five), save others for later,
check them off as you finish, and watch the exercise/minute/calorie totals update live —
all persisted so it's still there after a reload.

---

## 🔗 Links

- **Live Site:** [fit-log-flame.vercel.app](https://fit-log-flame.vercel.app/)
- **Repository:** [github.com/ABiR994/Fit-Log](https://github.com/ABiR994/Fit-Log)

---

## ✨ Key Features

### 🏋️ Workout Library
A responsive 3-column grid (1 column on mobile, 2 on tablet, 3 on desktop) of all twelve
workouts from the FitLog API, each card showing its image, muscle-group tag pills, equipment,
and a duration/calories/rating stats row. Clicking a card opens its full detail page.

### 📋 Workout Details
A two-column detail page: a full-bleed image on the left, and on the right the name,
description, category tags, a key-specs panel (equipment, difficulty, sets, reps, duration,
calories, rating), and a numbered instructions list — with "Add to today's plan" and "Save
for later" actions.

### 📊 My Plan Dashboard
A dedicated `/my-plan` page with a live metrics row (exercises, minutes, calories), tabs for
Today's Plan and Saved, a "Sort By" dropdown (duration / calories / rating), and per-item
"Mark as Done" and remove actions — with a dedicated empty state when a tab has nothing in it.

### 🔔 Live Badges & Toasts
The navbar's Plan and Saved badge counts update instantly the moment a workout is added,
saved, or removed — from any page, with no reload — and every action (add, save, mark done,
remove) fires a matching toast via React-Toastify.

### 💾 Persistent State
Today's Plan, Saved, and Done status are all saved to `localStorage`, so your plan survives
a page reload or closing the tab. Cross-tab and cross-component updates are kept in sync
through a small shared hook, not a page refresh.

### 📱 Fully Responsive
The navbar, hero, workout grid, and plan cards all reflow cleanly across mobile, tablet, and
desktop, alongside a matching loading state and a themed 404 page for any unknown route.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⬛ Next.js (App Router) | Routing, server-rendered pages, dynamic workout detail routes |
| 🔷 TypeScript | Type-safe props, state, and the `Workout` data model |
| 🎨 Tailwind CSS v4 | Utility-first styling |
| 🌼 DaisyUI | Themed buttons, tabs, and the loading spinner |
| 🔔 React-Toastify | Toast notifications for every plan/saved action |
| 🖼️ React Icons | Stat, action, and navigation icons |
| 🌐 FitLog API | Live workout data (`api.abcz.workers.dev`) |

---

## 📂 Project Structure

```text
fit-log/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home: Hero + Library
│   │   ├── loading.tsx              # Home page loading state
│   │   ├── not-found.tsx            # 404 page
│   │   ├── layout.tsx               # Root layout: Navbar, Footer, ToastContainer
│   │   ├── my-plan/page.tsx         # My Plan page
│   │   └── workouts/[id]/page.tsx   # Workout details page
│   │
│   ├── components/
│   │   ├── Navbar.tsx                # Logo, nav links, live Plan/Saved badges
│   │   ├── Hero.tsx                  # Banner with CTA anchor to #library
│   │   ├── Library.tsx               # Workout grid section
│   │   ├── WorkoutCard.tsx           # Single workout card
│   │   ├── WorkoutDetails.tsx        # Detail page layout + plan/save actions
│   │   ├── Footer.tsx                # Brand + copyright
│   │   ├── Spinner.tsx               # Shared loading spinner
│   │   └── plan/                     # My Plan page: tabs, cards, metrics, empty state
│   │
│   ├── hooks/
│   │   └── usePlanStorage.ts         # Shared, cross-component localStorage state
│   │
│   ├── lib/
│   │   ├── api.ts                    # getWorkouts / getWorkout
│   │   └── constants.ts              # Plan cap, storage keys
│   │
│   ├── types/
│   │   └── workout.ts                # Workout type
│   │
│   └── assets/                       # Logo and hero banner images
│
├── package.json
├── next.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/ABiR994/Fit-Log.git
cd Fit-Log
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## 👨‍💻 Author

**Salem Nur Abir**

<a href="https://github.com/ABiR994">
  <img src="https://img.shields.io/badge/GitHub-ABiR994-181717?style=for-the-badge&logo=github" alt="GitHub" />
</a>

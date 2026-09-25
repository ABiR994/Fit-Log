"use client";

import { useEffect, useState } from "react";

/**
 * Reads/writes a number[] to localStorage. SSR-safe: starts empty, then
 * hydrates from storage on mount. `hydrated` lets callers avoid a flash
 * of the empty state before the real value is known.
 */
export function usePlanStorage(key: string) {
  const [ids, setIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setIds(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(ids));
    } catch {}
  }, [key, ids, hydrated]);

  return [ids, setIds, hydrated] as const;
}

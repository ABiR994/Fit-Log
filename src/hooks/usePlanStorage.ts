"use client";

import { useCallback, useEffect, useState } from "react";

// Fired whenever any usePlanStorage instance writes, so every other
// instance watching the same key (e.g. Navbar + a details page) re-syncs
// in the same tab. The native "storage" event only fires in *other* tabs.
const SYNC_EVENT = "fitlog:storage-sync";

function readIds(key: string): number[] {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Shared, cross-component localStorage state for a number[] (plan/saved/
 * done ids). SSR-safe: starts empty, then hydrates on mount. `hydrated`
 * lets callers avoid flashing the empty state before the real value loads.
 */
export function usePlanStorage(key: string) {
  const [ids, setIdsState] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Initial load from storage.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIdsState(readIds(key));
    setHydrated(true);
  }, [key]);

  // Stay in sync with writes from any other component using this key.
  useEffect(() => {
    const sync = () => {
      setIdsState((prev) => {
        const next = readIds(key);
        return JSON.stringify(next) === JSON.stringify(prev) ? prev : next;
      });
    };
    window.addEventListener(SYNC_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(SYNC_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [key]);

  const setIds = useCallback(
    (value: number[] | ((prev: number[]) => number[])) => {
      setIdsState((prev) => {
        const next = typeof value === "function" ? (value as (p: number[]) => number[])(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
          window.dispatchEvent(new Event(SYNC_EVENT));
        } catch {}
        return next;
      });
    },
    [key],
  );

  return [ids, setIds, hydrated] as const;
}

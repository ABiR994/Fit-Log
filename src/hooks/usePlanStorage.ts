"use client";

import { useCallback, useEffect, useState } from "react";

const SYNC_EVENT = "fitlog:storage-sync";

function readIds(key: string): number[] {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function usePlanStorage(key: string) {
  const [ids, setIdsState] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIdsState(readIds(key));
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(ids));
      window.dispatchEvent(new Event(SYNC_EVENT));
    } catch {}
  }, [key, ids, hydrated]);

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

  const setIds = useCallback((value: number[]) => {
    setIdsState(value);
  }, []);

  return [ids, setIds, hydrated] as const;
}

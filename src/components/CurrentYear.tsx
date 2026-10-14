"use client";

/** Current year, computed in the browser so statically built pages never show a stale year. */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

"use client";

import React from "react";

function track(event: string, params: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
      (window as unknown as Record<string, (event: string, params: Record<string, unknown>) => void>).gtag(event, params);
    }
  } catch {}
}

export default function Nav() {
  return (
    <header className="w-full border-b border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          ReturnML
        </span>
        <a
          href="#waitlist"
          onClick={() => track("cta_click", { location: "nav_access" })}
          className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-5 py-2 text-sm font-medium text-white dark:text-zinc-900 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200"
        >
          Request access
        </a>
      </div>
    </header>
  );
}

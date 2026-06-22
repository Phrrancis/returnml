"use client";

import React from "react";
import { track } from "../utils/track";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm">
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

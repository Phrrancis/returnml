"use client";

import React from "react";
import { track } from "../utils/track";

export default function Cta() {
  return (
    <section className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-indigo-600 dark:bg-indigo-700 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to see what your returns are actually costing you?
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Start with a free 60-day shadow pilot — read-only, cancel anytime.
          We&apos;ll show you the numbers on your own data before you change
          anything.
        </p>
        <a
          href="mailto:francis@returnml.com"
          onClick={() => track("cta_click", { location: "cta" })}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow transition-colors hover:bg-indigo-50"
        >
          Start a free 60-day shadow pilot →
        </a>
      </div>
    </section>
  );
}

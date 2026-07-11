"use client";

import React from "react";
import { track } from "../utils/track";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl px-6 py-16 text-center sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        Return-Prediction Verification for Shopify Plus
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
        Prove it <span className="text-indigo-600 dark:text-indigo-400">before you change anything.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        Drop in one API call at the cart page. For 60 days ReturnML scores
        every cart silently — nothing changes for your customers. Then we
        show you, on your own data, exactly what returns cost you and what
        our predictions would have saved. Scoring itself runs in under
        50&nbsp;ms.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          id="waitlist"
          href="mailto:francis@returnml.com"
          onClick={() => track("cta_click", { location: "hero" })}
          className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-indigo-500"
        >
          Start a free 60-day shadow pilot
        </a>
        <a
          href="#how-it-works"
          className="rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-base font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          See how it works
        </a>
      </div>
    </section>
  );
}

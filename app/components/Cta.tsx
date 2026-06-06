"use client";

import React from "react";

function track(event: string, params: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
      (window as unknown as Record<string, (event: string, params: Record<string, unknown>) => void>).gtag(event, params);
    }
  } catch {}
}

export default function Cta() {
  return (
    <section className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-indigo-600 dark:bg-indigo-700 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to stop leaving profit in the returns bin?
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          ReturnML is in early access. Request a spot and we'll set you up
          with a sandbox environment and a pilot plan.
        </p>
        <a
          href="mailto:francis@returnml.com"
          onClick={() => track("cta_click", { location: "cta" })}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow transition-colors hover:bg-indigo-50"
        >
          Request early access →
        </a>
      </div>
    </section>
  );
}

import React from "react";
import { Zap, Timer, ShieldCheck, BookOpen } from "lucide-react";

const ITEMS = [
  {
    icon: <Zap className="w-6 h-6" aria-hidden="true" />,
    title: "Verified before you act",
    description:
      "The shadow pilot IS the proof: we show you precision and recall on your own carts before a single prediction changes anything for a customer.",
  },
  {
    icon: <Timer className="w-6 h-6" aria-hidden="true" />,
    title: "<50 ms p99 latency",
    description:
      "Built for checkout speed. ReturnML sits in your critical path and still returns before the page finishes loading.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
    title: "Guardrails included",
    description:
      "VIPs and first-time buyers are automatically protected. Never charge a top customer by accident.",
  },
  {
    icon: <BookOpen className="w-6 h-6" aria-hidden="true" />,
    title: "Explainable by default",
    description:
      "Every score comes with SHAP-based reasons your ops team can actually read — and your legal team can defend.",
  },
];

export default function Differentiators() {
  return (
    <section className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Not just a guess. Verified.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Most tools say &ldquo;this order is risky&rdquo;. ReturnML says &ldquo;offering
            the non-returnable coupon would have made you €4.10 more than doing
            nothing — and here&apos;s the verified data that proves it.&rdquo;
            That&apos;s causal ML, not correlation.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {ITEMS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-8"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/50 p-2 text-indigo-600 dark:text-indigo-400">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

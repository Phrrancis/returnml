import React from "react";

const ITEMS = [
  {
    title: "Day-1 accuracy",
    description:
      "Cross-merchant embeddings mean the model is useful from your very first order — no cold-start waiting period.",
  },
  {
    title: "<50 ms p99 latency",
    description:
      "Built for checkout speed. ReturnML sits in your critical path and still returns before the page finishes loading.",
  },
  {
    title: "Guardrails included",
    description:
      "VIPs and first-time buyers are automatically protected. Never charge a top customer by accident.",
  },
  {
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
            Not just prediction. Uplift.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Most tools say "this order is risky". ReturnML says "if you
            charge delivery, you'll make €2.40 more than if you do nothing."
            That's causal ML, not correlation.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {ITEMS.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-8"
            >
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

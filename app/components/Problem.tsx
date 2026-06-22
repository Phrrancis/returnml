import React from "react";
import { XCircle, CheckCircle } from "lucide-react";

const ITEMS = [
  {
    label: "Blanket free returns",
    description:
      "Lose €8+ on every returnable order. You train customers to buy five, keep one.",
    bad: true,
  },
  {
    label: "Charge everyone",
    description:
      "Kill conversion. Good customers leave. Return rate barely budges.",
    bad: true,
  },
  {
    label: "ReturnML",
    description:
      "Score the cart before checkout. Charge, coupon, or do nothing — based on actual expected profit.",
    bad: false,
  },
];

export default function Problem() {
  return (
    <section className="w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Fashion e-com loses $850B/year to returns
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Most brands fight it with two bad tools.
        </p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ label, description, bad }) => (
          <div
            key={label}
            className={`rounded-2xl border p-8 ${
              bad
                ? "border-red-100 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30"
                : "border-indigo-200 bg-indigo-50 dark:border-indigo-800/40 dark:bg-indigo-950/30"
            }`}
          >
            <p
              className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
                bad ? "text-red-600 dark:text-red-400" : "text-indigo-600 dark:text-indigo-400"
              }`}
            >
              {bad
                ? <XCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                : <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />}
              {label}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

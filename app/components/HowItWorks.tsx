import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Connect",
    description:
      "Drop in a 1-line SDK or fire a single API call when a user hits the cart page. No warehouse, no ETL, no sprint required.",
  },
  {
    step: "02",
    title: "We watch, silently",
    description:
      "For 60 days ReturnML scores every cart in the background. No customer-facing changes, no pricing changes, zero conversion risk.",
  },
  {
    step: "03",
    title: "You get the Money Report",
    description:
      "Verified prediction accuracy on your own carts, euros lost to flagged carts, and the simulated profit of each intervention — with SHAP explanations behind every score.",
  },
  {
    step: "04",
    title: "Turn on actions (optional)",
    description:
      "Only once the numbers convince you. Start with an opt-in, non-returnable coupon — the least scary action available.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            From zero data to verified proof — before you act on a single prediction.
          </p>
        </div>
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, title, description }) => (
            <li key={step} className="flex flex-col gap-4">
              <span className="text-4xl font-bold text-indigo-200 dark:text-indigo-900">
                {step}
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

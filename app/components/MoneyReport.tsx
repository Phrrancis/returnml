import React from "react";

const STATS = [
  { label: "Carts scored", value: "48,211" },
  { label: "Flagged high-risk", value: "6,904" },
  { label: "Verified return rate among flagged", value: "61%" },
  { label: "Return costs identified", value: "€54,300" },
];

export default function MoneyReport() {
  return (
    <section className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            After 60 days
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            The Money Report
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Verified prediction accuracy on your own carts, euros lost to
            flagged carts, and the simulated profit of each intervention —
            before you turn anything on.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-700 flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Modanova — 60-day shadow pilot report
            </span>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              Illustrative example
            </span>
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ label, value }) => (
              <div key={label}>
                <p className="text-2xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
                  {value}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-700 px-6 py-5 bg-emerald-50 dark:bg-emerald-950/30">
            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-1">
              Simulated profit — top-decile coupon action
            </p>
            <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
              +€11,200 net
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Had you offered the opt-in, non-returnable coupon to the
              top-decile flagged carts, this is what the verified outcome
              data says you would have kept.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-400">
          Numbers above are illustrative. Your report is built from your own
          scored carts joined against your actual Shopify return outcomes —
          nothing is estimated from other merchants.
        </p>
      </div>
    </section>
  );
}

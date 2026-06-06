import React from "react";

export default function ApiSample() {
  return (
    <section className="w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          One call. Full picture.
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Risk score + expected profit per action, straight from the response body.
        </p>
      </div>
      <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-4 sm:p-6 text-xs sm:text-sm font-mono text-zinc-300 overflow-x-auto shadow-xl">
        <pre>{`// POST /v1/score
{
  "session_id": "usr_8f2a",
  "cart": [
    { "sku": "DRESS-M-RED", "qty": 2 },
    { "sku": "JEANS-32", "qty": 1 }
  ]
}

// Response (47 ms)
{
  "return_risk": 0.83,
  "actions": [
    { "type": "charge_delivery", "delta_profit": 2.40 },
    { "type": "coupon_5pct", "delta_profit": 4.10 },
    { "type": "do_nothing", "delta_profit": 0.00 }
  ],
  "explanation": [
    "3 similar items in cart",
    "62% historical return rate",
    "COD payment method"
  ]
}`}</pre>
      </div>
    </section>
  );
}

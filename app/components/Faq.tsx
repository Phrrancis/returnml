import React from "react";

const FAQS = [
  {
    q: "How long does integration take?",
    a: "Under a day. Drop in our SDK or fire a single POST to /v1/score when a user hits the cart page. No data pipeline, no model training, no sprint.",
  },
  {
    q: "Will my customers see anything during the pilot?",
    a: "No. The 60-day shadow pilot is fully read-only — we score every cart in the background. No checkout copy, pricing, or flow changes for a single customer until you explicitly opt in to actions.",
  },
  {
    q: "Do we need historical return data?",
    a: "No history required to start scoring — but we don't ask you to trust the model blind either. The shadow pilot IS the proof: we show you precision and recall on your own carts before you act on a single prediction.",
  },
  {
    q: "How do you verify predictions?",
    a: "We join every scored cart against actual return and refund outcomes from Shopify's returns API once the return window closes — typically 30–45 days. We wait for label maturity of 60+ days before reporting, so the accuracy numbers you see are verified on your own data, not a vendor benchmark.",
  },
  {
    q: "What data do you keep?",
    a: "Hashed cart/session IDs and outcome labels only — no PII, GDPR-clean. Under the pilot terms, anonymized outcome data helps improve our cross-merchant models; this is stated transparently upfront and you can opt out at cancellation.",
  },
  {
    q: "Which actions can we configure?",
    a: "The flagship action is an opt-in, non-returnable coupon offered at checkout. A personalized delivery charge is available as an advanced option. You set the thresholds; ReturnML returns the simulated profit delta for each option so you decide — and these only go live after the pilot.",
  },
  {
    q: "What if our stack isn't Shopify?",
    a: "We're launching with Shopify Plus first. ReturnML's scoring API is platform-agnostic under the hood, so Salesforce Commerce Cloud, Magento, and custom stacks can follow via the same REST API.",
  },
  {
    q: "How are VIP customers protected?",
    a: "Guardrails are built in for when actions go live. First-time buyers and high-LTV customers are automatically excluded from any friction actions — you never risk charging your best customers by mistake.",
  },
];

export default function Faq() {
  return (
    <section className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Common questions
          </h2>
        </div>
        <dl className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {FAQS.map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6"
            >
              <dt className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {q}
              </dt>
              <dd className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

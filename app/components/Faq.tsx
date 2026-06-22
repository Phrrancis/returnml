import React from "react";

const FAQS = [
  {
    q: "How long does integration take?",
    a: "Under a day. Drop in our SDK or fire a single POST to /v1/score when a user hits the checkout page. No data pipeline, no model training, no sprint.",
  },
  {
    q: "Do we need historical return data?",
    a: "No. Cross-merchant embeddings make ReturnML accurate from your very first order — the cold-start problem is solved before you go live.",
  },
  {
    q: "Is it GDPR compliant?",
    a: "Yes. We process cart metadata only — no PII is stored or transferred. All data is processed ephemerally at inference time and discarded immediately after the response.",
  },
  {
    q: "Which actions can we configure?",
    a: "Charge a delivery fee, apply a percentage coupon, or do nothing. You set the thresholds; ReturnML returns the expected profit delta for each option so you decide.",
  },
  {
    q: "What if our stack isn't Shopify?",
    a: "ReturnML is platform-agnostic. Works with Shopify Plus, Salesforce Commerce Cloud, Magento, and any custom stack via our REST API.",
  },
  {
    q: "How are VIP customers protected?",
    a: "Guardrails are built in. First-time buyers and high-LTV customers are automatically excluded from any friction actions — you never risk charging your best customers by mistake.",
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

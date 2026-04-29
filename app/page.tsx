import ShopifyDemo from "./components/ShopifyDemo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-white dark:bg-zinc-950 font-sans">
      {/* Nav */}
      <header className="w-full border-b border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            ReturnML
          </span>
          <a
            href="#waitlist"
            className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-5 py-2 text-sm font-medium text-white dark:text-zinc-900 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200"
          >
            Request access
          </a>
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* Hero */}
        <section className="w-full max-w-6xl px-6 py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            The Returns ML Lab for E-commerce
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Predict Returns.{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Keep Profit.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            One API call at checkout. ReturnML scores the return risk of every
            cart in under 50&nbsp;ms and tells you the most profitable
            action — so you stop losing €8 on orders that come straight back.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              id="waitlist"
              href="mailto:francis@returnml.com"
              className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-indigo-500"
            >
              Request early access
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-base font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              See how it works
            </a>
          </div>
        </section>

        {/* Problem */}
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
            {[
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
            ].map(({ label, description, bad }) => (
              <div
                key={label}
                className={`rounded-2xl border p-8 ${
                  bad
                    ? "border-red-100 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30"
                    : "border-indigo-200 bg-indigo-50 dark:border-indigo-800/40 dark:bg-indigo-950/30"
                }`}
              >
                <p
                  className={`text-sm font-semibold mb-3 ${
                    bad
                      ? "text-red-600 dark:text-red-400"
                      : "text-indigo-600 dark:text-indigo-400"
                  }`}
                >
                  {bad ? "❌  " : "✓  "}
                  {label}
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
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
                Three steps from zero data to live profit decisions.
              </p>
            </div>
            <ol className="grid gap-10 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Connect",
                  description:
                    "Drop in a 1-line SDK or fire a single API call when a user hits the cart page. No warehouse, no ETL, no sprint required.",
                },
                {
                  step: "02",
                  title: "Score in <50 ms",
                  description:
                    "ReturnML returns a return risk score and the incremental profit for each available action — charge delivery, offer a coupon, or do nothing.",
                },
                {
                  step: "03",
                  title: "Decide",
                  description:
                    'You choose the action. ReturnML explains why with SHAP: "3 similar items in cart · 62% hist. return rate · COD payment."',
                },
              ].map(({ step, title, description }) => (
                <li key={step} className="flex flex-col gap-4">
                  <span className="text-4xl font-bold text-indigo-200 dark:text-indigo-900">
                    {step}
                  </span>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SHOPIFY DEMO */}
        <section className="w-full border-t border-zinc-100 dark:border-zinc-800 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
                Live demo
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                See it in action
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Add items to the cart below. When you hit checkout, ReturnML
                scores the cart in real time and recommends the most profitable
                action.
              </p>
            </div>
            <ShopifyDemo />
          </div>
        </section>

        {/* API sample */}        <section className="w-full max-w-6xl px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              One call. Full picture.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Risk score + expected profit per action, straight from the
              response body.
            </p>
          </div>
          <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-4 sm:p-6 text-xs sm:text-sm font-mono text-zinc-300 overflow-x-auto shadow-xl">
            <pre>{`// POST /v1/score
{
  "session_id": "usr_8f2a",
  "cart": [
    { "sku": "DRESS-M-RED", "qty": 2 },
    { "sku": "JEANS-32",    "qty": 1 }
  ]
}

// Response (47 ms)
{
  "return_risk": 0.83,
  "actions": [
    { "type": "charge_delivery", "delta_profit": 2.40 },
    { "type": "coupon_5pct",     "delta_profit": 4.10 },
    { "type": "do_nothing",      "delta_profit": 0.00 }
  ],
  "explanation": [
    "3 similar items in cart",
    "62% historical return rate",
    "COD payment method"
  ]
}`}</pre>
          </div>
        </section>

        {/* Differentiators */}
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
              {[
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
              ].map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-8"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                    {title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="w-full max-w-6xl px-6 py-16 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            The outcome
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            3–6% fewer returns.
            <br />
            Zero conversion loss.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-zinc-600 dark:text-zinc-400">
            For a €100M fashion brand, that's{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              €2–3M in net margin per year.
            </span>{" "}
            You keep more sales and keep the right customers.
          </p>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-base">
            Works with Shopify Plus, Salesforce Commerce Cloud, and custom
            stacks.
          </p>
        </section>

        {/* CTA */}
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
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow transition-colors hover:bg-indigo-50"
            >
              Request early access →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-100 dark:border-zinc-800 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} ReturnML a CloudsWeave AB Company</span>
          <span>Predict Returns. Keep Profit.</span>
        </div>
      </footer>
    </div>
  );
}

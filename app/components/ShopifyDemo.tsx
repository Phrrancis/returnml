"use client";

import { useState } from "react";

const CATALOG = [
  { id: 1, name: "Silk Wrap Dress — Red, M", sku: "DRESS-M-RED", price: 89 },
  { id: 2, name: "High-Rise Jeans — W32", sku: "JEANS-32", price: 74 },
  { id: 3, name: "Oversized Blazer — Black, L", sku: "BLAZER-L-BLK", price: 129 },
  { id: 4, name: "Linen Shorts — Sand, S", sku: "SHORTS-S-SND", price: 49 },
  { id: 5, name: "Ribbed Knit Top — Cream, XS", sku: "KNIT-XS-CRM", price: 55 },
];

type CartItem = (typeof CATALOG)[number] & { qty: number };

type ScoreResult = {
  return_risk: number;
  latency_ms: number;
  actions: { type: string; label: string; delta_profit: number }[];
  explanation: string[];
};

function computeScore(cart: CartItem[]): ScoreResult {
  // Deterministic fake score based on cart contents
  const skus = cart.map((i) => i.sku);
  const qty = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let risk = 0.38;
  if (skus.includes("DRESS-M-RED")) risk += 0.22;
  if (skus.includes("BLAZER-L-BLK")) risk += 0.18;
  if (qty >= 3) risk += 0.15;
  if (total > 200) risk += 0.08;
  risk = Math.min(0.97, risk);

  const chargeProfit = risk > 0.6 ? +(risk * 3.8).toFixed(2) : +(risk * 1.2).toFixed(2);
  const couponProfit = risk > 0.6 ? +(risk * 5.1).toFixed(2) : +(risk * 2.0).toFixed(2);

  const explanation: string[] = [];
  if (qty >= 3) explanation.push(`${qty} items in cart (multi-item signal)`);
  if (skus.includes("DRESS-M-RED")) explanation.push("62% hist. return rate on this SKU");
  if (skus.includes("BLAZER-L-BLK")) explanation.push("Blazer category: 58% return rate");
  if (total > 200) explanation.push(`High order value (€${total})`);
  if (explanation.length === 0) explanation.push("No strong risk signals detected");

  return {
    return_risk: +risk.toFixed(2),
    latency_ms: 34 + Math.floor(Math.random() * 24),
    actions: [
      { type: "coupon_5pct", label: "Non-returnable coupon (opt-in)", delta_profit: couponProfit },
      { type: "charge_delivery", label: "Charge €5 delivery (advanced)", delta_profit: chargeProfit },
      { type: "do_nothing", label: "Do nothing", delta_profit: 0 },
    ],
    explanation,
  };
}

function riskLabel(r: number) {
  if (r >= 0.7) return { text: "High Risk", color: "text-red-600 dark:text-red-400" };
  if (r >= 0.45) return { text: "Medium Risk", color: "text-amber-600 dark:text-amber-400" };
  return { text: "Low Risk", color: "text-emerald-600 dark:text-emerald-400" };
}

function riskBarColor(r: number) {
  if (r >= 0.7) return "bg-red-500";
  if (r >= 0.45) return "bg-amber-400";
  return "bg-emerald-500";
}

export default function ShopifyDemo() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [scoring, setScoring] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [checkedOut, setCheckedOut] = useState(false);

  function addToCart(item: (typeof CATALOG)[number]) {
    setResult(null);
    setCheckedOut(false);
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setResult(null);
    setCheckedOut(false);
    setCart((prev) => prev.filter((c) => c.id !== id));
  }

  async function goToCheckout() {
    if (cart.length === 0) return;
    setScoring(true);
    setResult(null);
    // Simulate network latency
    await new Promise((r) => setTimeout(r, 900));
    setResult(computeScore(cart));
    setScoring(false);
  }

  function handleCheckout() {
    setCheckedOut(true);
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-2 items-start">
      {/* LEFT — Shopify-style storefront */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm">
        {/* Fake browser chrome */}
        <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 mx-3 bg-white dark:bg-zinc-700 rounded text-xs text-zinc-400 dark:text-zinc-400 px-3 py-1 font-mono truncate">
            modanova.myshopify.com/collections
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Modanova
            </h3>
            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full font-medium">
              Shopify Plus
            </span>
          </div>

          <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4 uppercase tracking-widest">
            New Arrivals
          </p>

          <div className="space-y-3">
            {CATALOG.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-zinc-100 dark:border-zinc-800 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                    {item.sku}
                  </p>
                </div>
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 shrink-0">
                  €{item.price}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="shrink-0 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-xs font-semibold px-3 py-1.5 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — Cart + ReturnML score panel */}
      <div className="flex flex-col gap-6">
        {/* Cart */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
          <div className="flex-1 mx-3 bg-white dark:bg-zinc-700 rounded text-xs text-zinc-400 dark:text-zinc-400 px-3 py-1 font-mono truncate">
            modanova.myshopify.com/cart
          </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Your Cart ({cart.reduce((s, i) => s + i.qty, 0)} items)
            </h3>

            {cart.length === 0 ? (
              <p className="text-sm text-zinc-400 dark:text-zinc-500 py-6 text-center">
                Add items from the store to get started
              </p>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        qty {item.qty} · €{item.price * item.qty}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 flex justify-between font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Total</span>
                  <span>€{total}</span>
                </div>

                <button
                  onClick={goToCheckout}
                  disabled={scoring}
                  className="w-full mt-2 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 py-3 text-sm font-semibold transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200 disabled:opacity-50"
                >
                  {scoring ? "Scoring cart…" : "Proceed to Checkout"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ReturnML score panel — shown after scoring */}
        {(scoring || result) && (
          <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/40 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-indigo-100 dark:border-indigo-800/40 flex items-center justify-between">
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                ReturnML — logged silently, customer sees nothing
              </span>
              {result && (
                <span className="text-xs font-mono text-indigo-400 dark:text-indigo-500">
                  {result.latency_ms} ms
                </span>
              )}
            </div>

            {scoring && (
              <div className="px-6 py-8 text-center">
                <div className="inline-block w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-sm text-indigo-600 dark:text-indigo-400">
                  Scoring cart in the background…
                </p>
              </div>
            )}

            {result && !checkedOut && (
              <div className="px-6 py-5 space-y-5">
                {/* Risk score */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                      Return Risk
                    </span>
                    <span
                      className={`text-xs font-semibold ${riskLabel(result.return_risk).color}`}
                    >
                      {riskLabel(result.return_risk).text}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${riskBarColor(result.return_risk)}`}
                        style={{ width: `${result.return_risk * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tabular-nums w-12 text-right">
                      {Math.round(result.return_risk * 100)}%
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                    Simulated actions (not shown to customer)
                  </p>
                  <div className="space-y-2">
                    {result.actions
                      .slice()
                      .sort((a, b) => b.delta_profit - a.delta_profit)
                      .map((action, i) => (
                        <div
                          key={action.type}
                          className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm ${
                            i === 0
                              ? "bg-indigo-600 text-white"
                              : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                          }`}
                        >
                          <span className="font-medium">{action.label}</span>
                          <span
                            className={`font-semibold tabular-nums ${
                              i === 0
                                ? "text-indigo-200"
                                : action.delta_profit > 0
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-zinc-400"
                            }`}
                          >
                            {action.delta_profit > 0
                              ? `+€${action.delta_profit}`
                              : "€0.00"}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                    Why
                  </p>
                  <ul className="space-y-1">
                    {result.explanation.map((e) => (
                      <li
                        key={e}
                        className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-0.5 text-indigo-400">›</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full rounded-xl bg-indigo-600 text-white py-3 text-sm font-semibold transition-colors hover:bg-indigo-500"
                >
                  Continue to checkout
                </button>
              </div>
            )}

            {result && checkedOut && (
              <div className="px-6 py-8 text-center space-y-2">
                <p className="text-2xl">✓</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Customer checked out normally
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Nothing changed for them — score logged silently in{" "}
                  {result.latency_ms}&nbsp;ms for the Money Report.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import ShopifyDemo from "./ShopifyDemo";

export default function ShopifyDemoSection() {
  return (
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
  );
}

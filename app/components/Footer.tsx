import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-800 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} ReturnML a CloudsWeave AB Company</span>
        <span>Predict Returns. Keep Profit.</span>
      </div>
    </footer>
  );
}

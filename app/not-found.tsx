import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white dark:bg-zinc-950 px-6 text-center font-sans">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
        404
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-indigo-500"
      >
        Back to home
      </Link>
    </div>
  );
}

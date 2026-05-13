"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[admin route error]", error);
  }, [error]);

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-error">
          Admin error
        </p>
        <h1 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
          Something broke in the dashboard.
        </h1>
        <p className="mt-4 text-base text-slate leading-relaxed">
          Coba reload page. Kalau persistent, kemungkinan migration belum
          ke-apply atau DB connection error. Cek <code className="text-xs bg-cream px-1.5 py-0.5 rounded">/api/admin/migrate</code> atau Supabase SQL Editor.
        </p>
        {error.digest && (
          <p className="mt-3 text-xs font-mono text-slate-mute">
            Error ID: {error.digest}
          </p>
        )}
        <details className="mt-4 text-xs text-slate-mute">
          <summary className="cursor-pointer">Show details</summary>
          <pre className="mt-2 p-3 bg-cream rounded-lg overflow-x-auto text-[11px] text-error">
            {error.message}
          </pre>
        </details>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
          >
            Try again
          </button>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm text-slate hover:bg-cream transition"
          >
            Dashboard home
          </Link>
        </div>
      </div>
    </main>
  );
}

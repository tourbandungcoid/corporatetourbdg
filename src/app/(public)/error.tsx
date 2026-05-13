"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink } from "@/lib/site";

export default function PublicError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console for now; wire to Sentry/PostHog later if needed
    console.error("[public route error]", error);
  }, [error]);

  return (
    <main className="bg-bone min-h-screen">
      <section className="container-1280 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-error">
            500 · Something went wrong
          </p>
          <h1 className="font-display mt-4 text-4xl md:text-5xl text-ink leading-[1.05]">
            Halaman ini error sebentar.
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate leading-relaxed">
            Tim kami otomatis dapet notifikasi. Coba reload, atau langsung chat WhatsApp — kami respond avg 6 jam working hours.
          </p>
          {error.digest && (
            <p className="mt-4 text-xs font-mono text-slate-mute">
              Error ID: {error.digest}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
            >
              Try again
              <ArrowRight size={14} />
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-paper px-6 h-12 text-sm font-medium text-ink hover:bg-cream transition"
            >
              Beranda
            </Link>
            <a
              href={buildWaLink("error page report")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-12 text-sm font-medium hover:opacity-90 transition"
            >
              <Whatsapp size={14} />
              Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

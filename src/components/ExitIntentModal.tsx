"use client";

import { useEffect, useState, useActionState, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  submitExitIntent,
  type ExitIntentState,
} from "@/lib/actions/submit-secondary-forms";
import { ArrowRight, Check, Close } from "@/components/icons/Icons";

const STORAGE_KEY = "exitIntentShown_v1";
const initial: ExitIntentState = { status: "idle" };

// Routes where exit-intent should NOT show — user is already deep in funnel
const BLOCKED_PREFIXES = [
  "/admin",
  "/proposal/",
  "/api",
];

export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [state, action, isPending] = useActionState(submitExitIntent, initial);
  const triggeredRef = useRef(false);
  const lastScrollYRef = useRef(0);

  // Should this route be skipped entirely?
  const blocked = BLOCKED_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (blocked) return;
    if (typeof window === "undefined") return;

    // Don't re-trigger if user already saw the modal this browser
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // localStorage blocked — soldier on
    }

    function maybeTrigger() {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setOpen(true);
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }

    // Desktop: pointer leaves top edge of viewport
    function onMouseOut(e: MouseEvent) {
      if (e.relatedTarget) return; // moving to another element, not leaving
      if (e.clientY > 0) return; // not exiting from the top
      maybeTrigger();
    }

    // Mobile: aggressive scroll-up gesture (likely heading for back button)
    function onScroll() {
      const y = window.scrollY;
      const prev = lastScrollYRef.current;
      lastScrollYRef.current = y;
      // Need to have scrolled meaningfully into the page first
      if (prev < 600) return;
      // Fast upward swing of >120px = exit-intent on mobile
      if (prev - y > 120) maybeTrigger();
    }

    // Tab visibility loss after engagement
    function onVisibility() {
      if (document.visibilityState === "hidden" && window.scrollY > 400) {
        maybeTrigger();
      }
    }

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [blocked, pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (blocked || !open) return null;

  const isSuccess = state.status === "success";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Tutup"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/65 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl bg-paper p-7 md:p-9 shadow-[0_24px_72px_rgba(15,31,26,0.35)] animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-slate hover:bg-cream hover:text-ink transition"
        >
          <Close size={18} />
        </button>

        {isSuccess ? (
          <div className="text-center py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
              <Check size={24} />
            </div>
            <h2 className="font-display mt-5 text-2xl text-ink">
              Email tersimpan ✓
            </h2>
            <p className="mt-3 text-sm text-slate leading-relaxed">
              {state.message ??
                "Sample proposal kami kirim ke email lo dalam 1×24 jam."}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-border bg-paper px-6 h-10 text-sm font-medium text-ink hover:bg-cream transition"
            >
              Lanjut browsing
            </button>
          </div>
        ) : (
          <>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/10 text-brand-deep px-3 py-1 text-[11px] font-medium uppercase tracking-wider">
              Tunggu sebentar
            </span>
            <h2
              id="exit-intent-title"
              className="font-display mt-4 text-2xl md:text-3xl text-ink leading-snug"
            >
              Sebelum lo close — sample proposal gratis?
            </h2>
            <p className="mt-3 text-sm text-slate leading-relaxed">
              Real proposal corporate outing 200 pax (12 halaman PDF) — pakai
              buat reference internal, atau bandingin sama quote vendor lain.
              Kami kirim ke email lo, no spam.
            </p>

            <form action={action} className="mt-6 space-y-3">
              <input
                type="hidden"
                name="source_url"
                value={`exit_intent:${pathname}`}
              />
              <label className="block">
                <span className="sr-only">Email perusahaan</span>
                <input
                  type="email"
                  name="work_email"
                  required
                  placeholder="kamu@perusahaan.com"
                  className="w-full h-12 rounded-full border border-border bg-paper px-5 text-sm text-ink placeholder:text-slate-mute focus:outline-none focus:border-ink-soft focus:ring-2 focus:ring-brand/15"
                  autoFocus
                />
              </label>

              {state.status === "error" && state.message && (
                <p className="text-xs text-error px-1">{state.message}</p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
              >
                {isPending ? "Sending…" : "Email me the sample"}
                <ArrowRight size={14} />
              </button>
              <p className="text-[11px] text-slate-mute text-center">
                🔒 800+ HR sudah pakai sample ini. No spam — kami kirim sekali +
                1 follow-up 3 hari kemudian.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

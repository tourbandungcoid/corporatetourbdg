"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Whatsapp } from "./icons/Icons";
import { buildWaLink } from "@/lib/site";

type Props = {
  message?: string;
  context?: string;
};

/**
 * Sticky bottom CTA bar that appears after 60% scroll on SEO money pages.
 * Provides quick access to proposal request + WhatsApp without scrolling
 * back to the top.
 */
export function StickyProposalBar({
  message = "Tim Anda butuh proposal corporate outing? Free, dalam 24 jam.",
  context,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? scrolled / max : 0;
      setVisible(progress > 0.35 && progress < 0.92);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed bottom-4 inset-x-0 z-40 px-4 transition-all duration-300 no-print pointer-events-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0",
      ].join(" ")}
    >
      <div className="container-1280 !px-0">
        <div className="rounded-2xl bg-ink/95 backdrop-blur-xl text-paper border border-ink-soft shadow-[0_16px_48px_rgba(15,31,26,0.25)] px-5 py-3 md:px-6 md:py-4 flex items-center gap-4 pointer-events-auto">
          <p className="text-sm md:text-base text-paper/85 leading-tight flex-1 hidden sm:block">
            {message}
          </p>
          <div className="flex items-center gap-2 flex-1 sm:flex-none">
            <Link
              href="/proposal/request"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full bg-brand text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
            >
              Request Proposal
              <ArrowRight size={14} />
            </Link>
            <a
              href={buildWaLink(context)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition flex-shrink-0"
            >
              <Whatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

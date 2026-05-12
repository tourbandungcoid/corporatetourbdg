"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsApp, ArrowRight } from "./Icon";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--color-paper)] border-t border-[var(--color-border)] shadow-[0_-8px_24px_rgba(10,22,40,0.06)] transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-2 gap-2 p-3">
          <Link
            href="/proposal/request"
            className="btn btn-primary flex-1 btn-sm"
          >
            Request Proposal
          </Link>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary flex-1 btn-sm"
            style={{ background: "var(--color-success)", borderColor: "var(--color-success)", color: "white" }}
          >
            <WhatsApp size={16} /> WhatsApp
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className={`hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-3 bg-[var(--color-success)] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <WhatsApp size={22} />
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-medium">Chat with us</span>
          <span className="text-[11px] opacity-90">Response in ~47 min</span>
        </div>
        <ArrowRight size={14} />
      </a>
    </>
  );
}

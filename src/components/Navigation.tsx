"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogoLockup } from "./Logo";
import { Whatsapp, Menu, Close, ArrowRight } from "./icons/Icons";
import { buildWaLink } from "@/lib/site";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

/**
 * Tourvia-style nav:
 * - Logo standalone (no container)
 * - Center nav pill with border (the only bordered element)
 * - CTA pill standalone
 * - All glassmorphism only on the nav pill itself
 */
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 no-print px-4 md:px-6">
      <div className="container-1280 !px-0">
        <div className="flex items-center justify-between gap-3 h-16">
          {/* Logo — standalone */}
          <Link
            href="/"
            aria-label="Beranda"
            className="flex-shrink-0 flex items-center"
          >
            <LogoLockup
              height={40}
              variant={scrolled ? "light" : "dark"}
              showCorporateLabel={false}
            />
          </Link>

          {/* Center nav pill — the only bordered element */}
          <nav
            className={[
              "hidden lg:flex items-center gap-1",
              "absolute left-1/2 -translate-x-1/2",
              "rounded-full px-2 h-12 border",
              "transition-all duration-300",
              scrolled
                ? "bg-paper/90 backdrop-blur-xl border-border shadow-[0_8px_30px_rgba(15,31,26,0.08)]"
                : "bg-transparent border-paper/30",
            ].join(" ")}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                  scrolled
                    ? "text-ink/75 hover:bg-ink hover:text-paper"
                    : "text-paper/90 hover:bg-paper hover:text-ink",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster — standalone */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/proposal/request"
              className={[
                "hidden md:inline-flex items-center gap-1.5 rounded-full px-6 h-12 text-sm font-medium transition-colors border",
                scrolled
                  ? "bg-ink text-paper border-ink hover:bg-brand-deep hover:border-brand-deep"
                  : "bg-paper text-ink border-paper hover:bg-brand hover:text-paper hover:border-brand",
              ].join(" ")}
            >
              Request Proposal
              <ArrowRight size={14} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className={[
                "lg:hidden flex h-12 w-12 items-center justify-center rounded-full border transition-colors",
                scrolled
                  ? "text-ink border-border bg-paper hover:bg-cream"
                  : "text-paper border-paper/30 bg-transparent hover:bg-paper/10",
              ].join(" ")}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-paper flex flex-col">
          <div className="container-1280">
            <div className="flex h-16 items-center justify-between md:h-20">
              <LogoLockup height={40} showCorporateLabel={false} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-cream transition"
              >
                <Close size={22} />
              </button>
            </div>
          </div>

          <nav className="flex-1 container-1280 pt-8 pb-12 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-3xl font-display text-ink hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-10 flex flex-col gap-3">
              <Link
                href="/proposal/request"
                onClick={() => setOpen(false)}
                className="btn btn-primary btn-lg w-full justify-center"
              >
                Request Proposal
                <ArrowRight size={16} className="arrow" />
              </Link>
              <Link
                href="/proposal/book-consultation"
                onClick={() => setOpen(false)}
                className="btn btn-secondary btn-lg w-full justify-center"
              >
                Free Consultation
              </Link>
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full justify-center text-white"
                style={{ background: "#25D366" }}
              >
                <Whatsapp size={18} />
                Chat WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

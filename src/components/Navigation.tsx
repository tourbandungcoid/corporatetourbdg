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
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all duration-200 no-print",
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-divider"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-1280">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Beranda" className="flex-shrink-0">
            <LogoLockup height={36} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <Link
              href="/proposal/request"
              className="hidden md:inline-flex btn btn-primary btn-sm"
            >
              Request Proposal
              <ArrowRight size={14} className="arrow" />
            </Link>

            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-105 transition"
            >
              <Whatsapp size={18} />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-cream transition"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-paper flex flex-col">
          <div className="container-1280">
            <div className="flex h-16 items-center justify-between md:h-20">
              <LogoLockup height={36} />
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
                className="py-3 text-2xl font-display text-ink hover:text-brand transition-colors"
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
                Request Free Proposal
                <ArrowRight size={16} className="arrow" />
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

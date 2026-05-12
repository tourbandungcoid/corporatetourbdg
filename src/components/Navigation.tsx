"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "./Icon";
import { NAV, SITE } from "@/lib/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bone)]/95 backdrop-blur-md border-b border-[var(--color-divider)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-1280 flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-[20px] tracking-tight text-[var(--color-ink)]"
            aria-label={SITE.name}
          >
            <span className="font-display text-[var(--color-gold)]">7S</span>
            <span className="hidden sm:inline font-sans font-medium text-[15px]">
              TourBandung Corporate
            </span>
            <span className="sm:hidden font-sans font-medium text-[14px]">
              TB Corporate
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.primary.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[14px] font-medium text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors py-2"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[260px]">
                    <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-lg shadow-lg py-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-[14px] text-[var(--color-ink)] hover:text-[var(--color-gold)] hover:bg-[var(--color-cream)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              className="text-[12px] font-medium text-[var(--color-slate)] hover:text-[var(--color-ink)] transition-colors"
              aria-label="Bahasa Indonesia"
            >
              ID / EN
            </button>
            <Link href="/proposal/request" className="btn btn-primary btn-sm">
              Request Proposal
              <ArrowRight size={14} className="arrow" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[var(--color-ink)]"
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden bg-[var(--color-bone)] flex flex-col">
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-[var(--color-divider)]">
            <span className="font-sans font-medium text-[15px]">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="p-2"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            {NAV.primary.map((item) => (
              <div key={item.label} className="py-3 border-b border-[var(--color-divider)]">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-[24px] text-[var(--color-ink)] py-1"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block text-[14px] text-[var(--color-slate)] py-1.5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-8">
              <Link
                href="/proposal/request"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Request Proposal
                <ArrowRight size={16} className="arrow" />
              </Link>
              <a
                href={SITE.whatsappUrl}
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full mt-3"
              >
                Chat WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

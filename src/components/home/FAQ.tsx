"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "../Icon";
import { FAQ_HOME } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow-gold mb-6">Anticipated questions</p>
            <h2 className="font-display text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Yang biasanya HR tanyakan{" "}
              <span className="font-display-italic">sebelum booking.</span>
            </h2>
            <p className="mt-6 text-[15px] text-[var(--color-slate)]">
              Tidak menemukan jawaban Anda?{" "}
              <Link href="/faq" className="link-underline">
                Lihat 50+ FAQ →
              </Link>
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-[var(--color-border)]">
              {FAQ_HOME.map((f, i) => (
                <div
                  key={i}
                  className="border-b border-[var(--color-border)]"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-[20px] lg:text-[22px] leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`mt-1 text-[var(--color-slate)] transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${
                      open === i
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] leading-relaxed text-[var(--color-slate)] max-w-[680px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

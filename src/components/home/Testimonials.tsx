"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container-1280">
        <p className="eyebrow-gold mb-12 text-center">In their words</p>

        <blockquote className="max-w-[1000px] mx-auto text-center">
          <p className="font-display-italic text-[28px] sm:text-[38px] lg:text-[52px] leading-[1.15] tracking-[-0.015em] text-[var(--color-ink)]">
            <span className="text-[var(--color-gold)]">&ldquo;</span>
            {t.quote}
            <span className="text-[var(--color-gold)]">&rdquo;</span>
          </p>
        </blockquote>

        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-[var(--color-ink)]/10 flex items-center justify-center text-[var(--color-ink)] font-display text-[18px]">
            {t.author.charAt(0)}
          </div>
          <p className="font-medium text-[15px] text-[var(--color-ink)] mt-2">
            {t.author}
          </p>
          <p className="text-[13px] text-[var(--color-slate)]">
            {t.title}, {t.company}
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === idx
                  ? "w-10 bg-[var(--color-ink)]"
                  : "w-5 bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

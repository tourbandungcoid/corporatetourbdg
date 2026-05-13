import { getFeaturedTestimonials, type Testimonial } from "@/lib/testimonials-data";

export async function Testimonials() {
  const items = await getFeaturedTestimonials(8);
  if (items.length === 0) return null;

  // Split into 2 rows, fill at least 3 items each before duplicating for marquee
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half).length > 0 ? items.slice(half) : firstHalf;
  const row1 = [...firstHalf, ...firstHalf];
  const row2 = [...secondHalf, ...secondHalf];

  return (
    <section className="section bg-cream/40 overflow-hidden">
      <div className="container-1280 mb-14">
        <div className="max-w-3xl">
          <span className="eyebrow-brand">Testimonials</span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
            Dengar langsung dari HR yang pernah kerja bareng kami.
          </h2>
        </div>
      </div>

      {/* Row 1 — marquee left */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee flex gap-6 whitespace-normal">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}-${t.id ?? t.clientName}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — marquee right (reverse direction) */}
      <div className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="marquee flex gap-6 whitespace-normal"
          style={{ animationDirection: "reverse" }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}-${t.id ?? t.clientName}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.clientName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex-shrink-0 w-[360px] rounded-2xl border border-border bg-paper p-8">
      <span className="text-3xl text-brand-deep font-display leading-none">&ldquo;</span>
      <p className="mt-3 text-ink text-[15px] leading-relaxed">{t.quote}</p>
      <div className="mt-6 pt-5 border-t border-divider flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-sm">
          {initials}
        </div>
        <div>
          <p className="font-medium text-ink text-sm leading-tight">{t.clientName}</p>
          <p className="text-xs text-slate mt-0.5">
            {t.role ? `${t.role} · ` : ""}
            {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

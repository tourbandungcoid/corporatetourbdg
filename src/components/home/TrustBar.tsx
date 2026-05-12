import { TRUST_LOGOS } from "@/lib/site";

export function TrustBar() {
  // Duplicate for seamless marquee
  const items = [...TRUST_LOGOS, ...TRUST_LOGOS];
  return (
    <section className="py-10 lg:py-12 bg-[var(--color-cream)] border-y border-[var(--color-divider)] overflow-hidden">
      <div className="container-1280">
        <p className="eyebrow text-center mb-7">
          Dipercaya oleh enterprise Indonesia
        </p>
      </div>
      <div className="relative">
        <div className="marquee flex gap-12 lg:gap-16 whitespace-nowrap w-fit">
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[140px] h-[40px] text-[13px] lg:text-[14px] font-medium text-[var(--color-slate)] opacity-60 hover:opacity-100 transition-opacity tracking-tight"
            >
              {logo}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-cream)] to-transparent" />
      </div>
    </section>
  );
}

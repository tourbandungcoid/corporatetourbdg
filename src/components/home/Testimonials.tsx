const TESTIMONIALS = [
  {
    quote:
      "Yang gw appreciate: senior planner dedicated dari briefing sampai event. Bukan rotating freelancer. Komunikasi clean, accountability ada nama.",
    name: "Andini Pratama",
    role: "HR Manager",
    company: "Tech Unicorn",
  },
  {
    quote:
      "Proposal-nya detailed breakdown — finance team gw approval cepet karena gak ada hidden cost yang muncul belakangan.",
    name: "Bagas Wicaksono",
    role: "GA Manager",
    company: "BUMN Bank",
  },
  {
    quote:
      "Custom 100%. Brief gw soal cross-team bonding pasca-merger, mereka kasih program yang bener-bener address itu — bukan template outing.",
    name: "Citra Sari",
    role: "People Ops Lead",
    company: "B2B SaaS Startup",
  },
  {
    quote:
      "Banking image-conscious — kami gak mau kelihatan murahan. Vendor ini deliver premium feel tanpa harus jualan ke C-level kami.",
    name: "Dewi Lestari",
    role: "HR Director",
    company: "Private Banking",
  },
  {
    quote:
      "Response time-nya nyata 6 jam. Kami pernah urgent request 3 minggu sebelum event — they handled it tanpa drama.",
    name: "Erlangga Wirawan",
    role: "Founder",
    company: "Series B Startup",
  },
  {
    quote:
      "Vendor outing sebelumnya gak sanggup 600 pax. Mereka deliver 800 pax 3-day program tanpa miss detail. Skala mereka real.",
    name: "Fitri Hapsari",
    role: "HR Manager",
    company: "Manufacturing MNC",
  },
];

export function Testimonials() {
  const row1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const row2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3)];

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
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — marquee right (reverse direction via wrap) */}
      <div className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee flex gap-6 whitespace-normal" style={{ animationDirection: "reverse" }}>
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <div className="flex-shrink-0 w-[360px] rounded-2xl border border-border bg-paper p-8">
      <span className="text-3xl text-brand-deep font-display leading-none">&ldquo;</span>
      <p className="mt-3 text-ink text-[15px] leading-relaxed">
        {quote}
      </p>
      <div className="mt-6 pt-5 border-t border-divider flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-sm">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-medium text-ink text-sm leading-tight">{name}</p>
          <p className="text-xs text-slate mt-0.5">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}

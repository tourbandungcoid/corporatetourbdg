// Placeholder testimonials — replace with real quotes (with permission) via CMS (Phase 7)
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
  // Split into 2 rows for marquee
  const row1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const row2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3)];

  return (
    <section className="section bg-bone">
      <div className="container-1280">
        <div className="max-w-2xl">
          <p className="eyebrow-brand">Testimonials</p>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
            Dengar Langsung dari HR yang Pernah Kerja Bareng Kami
          </h2>
        </div>
      </div>

      {/* Row 1 — marquee left */}
      <div className="mt-12 overflow-hidden">
        <div className="marquee flex gap-6 whitespace-normal">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — marquee right (reverse direction) */}
      <div
        className="mt-6 overflow-hidden"
        style={{ transform: "scaleX(-1)" }}
      >
        <div className="marquee flex gap-6 whitespace-normal">
          {row2.map((t, i) => (
            <div key={`r2-${i}`} style={{ transform: "scaleX(-1)" }}>
              <TestimonialCard {...t} />
            </div>
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
    <div className="card flex-shrink-0 w-[340px] p-7 bg-paper">
      <div className="flex gap-1 text-warm">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-base">
            ★
          </span>
        ))}
      </div>
      <p className="mt-4 text-ink text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 pt-5 border-t border-divider">
        <p className="font-medium text-ink text-sm">{name}</p>
        <p className="text-xs text-slate mt-0.5">
          {role} · {company}
        </p>
      </div>
    </div>
  );
}

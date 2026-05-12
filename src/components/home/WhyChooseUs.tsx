const PILLARS = [
  {
    title: "Strategic partner, bukan agent forward booking.",
    body: "Setiap brief lo di-handle senior planner yang ngerti business outcome. Goal bonding pasca-merger di-design beda dengan goal annual celebration.",
    proof: "100% custom-designed, 0 paket copy-paste",
  },
  {
    title: "Bandung insider network sejak 2018.",
    body: "Akses langsung ke 60+ venue: villa private, resort premium, glamping site, outdoor ground. Bukan calo, bukan reseller. Tahu mana road yang macet jam berapa.",
    proof: "60+ venue partnership di Bandung & Jawa Barat",
  },
  {
    title: "Pricing transparan. No surprise markup.",
    body: "Proposal detailed breakdown — lo bisa lihat exactly margin kami. No admin fee tiba-tiba, no tax muncul mendadak. Finance team lo bakal love this.",
    proof: "0% hidden fees dalam 6 tahun terakhir",
  },
  {
    title: "Speed yang bikin decision cepat.",
    body: "Free proposal lengkap dalam 24 jam setelah briefing call. Most vendor butuh 5 hari. Lo bisa update management dalam 1-2 hari, bukan minggu depan.",
    proof: "Avg response time: 6 jam (working hours)",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-paper">
      <div className="container-1280">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow-brand">Why choose us</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              Kenapa 100+ HR pilih kami.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-slate leading-relaxed self-end">
            Empat hal yang konsisten kami dengar dari client repeat-booker —
            why they came back, dan kenapa mereka rekomendasikan ke HR-HR lain
            di industri mereka.
          </p>
        </div>

        <div className="grid gap-px bg-divider rounded-3xl overflow-hidden border border-divider">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="bg-paper p-8 md:p-12 grid gap-8 md:grid-cols-12 items-start"
            >
              <div className="md:col-span-2">
                <span className="font-display text-5xl md:text-6xl text-brand-deep tabular leading-none">
                  0{i + 1}
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base text-slate leading-relaxed">
                  {pillar.body}
                </p>
              </div>

              <div className="md:col-span-3 md:pl-6 md:border-l md:border-divider">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-mute mb-2">
                  The proof
                </p>
                <p className="text-sm font-medium text-ink leading-snug">
                  {pillar.proof}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

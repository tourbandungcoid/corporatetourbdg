import { getCopy } from "@/lib/brand-settings";

export async function WhyChooseUs() {
  const [
    eyebrow, headline, sub,
    p1Title, p1Body, p1Proof,
    p2Title, p2Body, p2Proof,
    p3Title, p3Body, p3Proof,
    p4Title, p4Body, p4Proof,
  ] = await Promise.all([
    getCopy("home.why.eyebrow", "Why choose us"),
    getCopy("home.why.headline", "Kenapa 100+ HR pilih kami."),
    getCopy("home.why.sub", "Empat hal yang konsisten kami dengar dari client repeat-booker — why they came back, dan kenapa mereka rekomendasikan ke HR-HR lain di industri mereka."),
    getCopy("home.why.p1.title", "Strategic partner, bukan agent forward booking."),
    getCopy("home.why.p1.body", "Setiap brief lo di-handle senior planner yang ngerti business outcome. Goal bonding pasca-merger di-design beda dengan goal annual celebration."),
    getCopy("home.why.p1.proof", "100% custom-designed, 0 paket copy-paste"),
    getCopy("home.why.p2.title", "Bandung insider network sejak 2018."),
    getCopy("home.why.p2.body", "Akses langsung ke 60+ venue: villa private, resort premium, glamping site, outdoor ground. Bukan calo, bukan reseller. Tahu mana road yang macet jam berapa."),
    getCopy("home.why.p2.proof", "60+ venue partnership di Bandung & Jawa Barat"),
    getCopy("home.why.p3.title", "Pricing transparan. No surprise markup."),
    getCopy("home.why.p3.body", "Proposal detailed breakdown — lo bisa lihat exactly margin kami. No admin fee tiba-tiba, no tax muncul mendadak. Finance team lo bakal love this."),
    getCopy("home.why.p3.proof", "0% hidden fees dalam 6 tahun terakhir"),
    getCopy("home.why.p4.title", "Speed yang bikin decision cepat."),
    getCopy("home.why.p4.body", "Free proposal lengkap dalam 24 jam setelah briefing call. Most vendor butuh 5 hari. Lo bisa update management dalam 1-2 hari, bukan minggu depan."),
    getCopy("home.why.p4.proof", "Proposal dalam 24 jam · Response awal avg 6 jam"),
  ]);

  const pillars = [
    { title: p1Title, body: p1Body, proof: p1Proof },
    { title: p2Title, body: p2Body, proof: p2Proof },
    { title: p3Title, body: p3Body, proof: p3Proof },
    { title: p4Title, body: p4Body, proof: p4Proof },
  ];

  return (
    <section className="section bg-paper">
      <div className="container-1280">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow-brand">{eyebrow}</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              {headline}
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-slate leading-relaxed self-end">
            {sub}
          </p>
        </div>

        <div className="grid gap-px bg-divider rounded-3xl overflow-hidden border border-divider">
          {pillars.map((pillar, i) => (
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

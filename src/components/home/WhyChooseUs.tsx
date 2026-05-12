import { Sparkle } from "@/components/icons/Icons";

// 4 pillars selected for launch (per Phase 2 strategy)
const PILLARS = [
  {
    title: "Bukan Vendor Generik, Tapi Strategic Partner",
    body: "Kami bukan agent yang cuma forward booking ke supplier. Setiap brief lo di-handle senior planner yang ngerti business outcome di balik event. Goal bonding pasca-merger di-design beda dengan goal annual celebration. Ini bedanya structured experience design vs sekedar 'jalan-jalan corporate'.",
    proof: "100% program di-design custom, 0 paket copy-paste",
  },
  {
    title: "Bandung Insider Network sejak 2018",
    body: "Hubungan langsung dengan 60+ venue: villa private, resort premium, glamping site, outdoor activity ground. Bukan calo, bukan reseller — akses langsung. Tahu kapan musim hujan di mana, mana road yang macet jam berapa, mana tempat yang fotogenik buat IG company.",
    proof: "60+ venue partnership di Bandung & Jawa Barat",
  },
  {
    title: "Pricing Transparan. No Surprise Markup.",
    body: "Proposal kami detailed breakdown — venue, F&B, logistics, activity, talent, contingency. Lo bisa lihat margin kami berapa. No 'admin fee' tiba-tiba, no 'tax' yang muncul saat invoice. Finance team lo akan love this — approval flow jadi cepet.",
    proof: "0% hidden fees dalam 6 tahun terakhir",
  },
  {
    title: "Speed Yang Bikin Decision Cepat",
    body: "Free proposal lengkap dalam 24 jam setelah briefing call. Most vendor butuh 5 hari. Kami investasi di internal database & senior planner availability — lo bisa kasih update ke management dalam 1-2 hari, bukan minggu depan.",
    proof: "Avg response time: 6 jam (working hours)",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-cream/50">
      <div className="container-1280">
        <div className="max-w-2xl">
          <p className="eyebrow-brand">Why Choose Us</p>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
            Kenapa 100+ HR Manager Pilih Kami
          </h2>
          <p className="mt-6 text-lg text-slate">
            4 alasan yang konsisten kami dengar dari client repeat-booker.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="card p-8 md:p-10 flex flex-col bg-paper"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl text-brand-deep tabular">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-divider" />
              </div>

              <h3 className="font-display mt-6 text-2xl text-ink md:text-3xl">
                {pillar.title}
              </h3>

              <p className="mt-4 text-base text-slate leading-relaxed">
                {pillar.body}
              </p>

              <div className="mt-6 pt-6 border-t border-divider flex items-start gap-2.5">
                <span className="mt-0.5 text-brand">
                  <Sparkle size={14} />
                </span>
                <p className="text-sm font-medium text-ink">
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

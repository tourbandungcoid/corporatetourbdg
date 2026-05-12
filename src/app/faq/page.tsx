import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink } from "@/lib/site";

export const metadata = {
  title: "FAQ",
  description:
    "Jawaban detail untuk pertanyaan paling sering ditanyakan HR tentang budget, logistik, vendor selection, dan corporate event design di Bandung.",
};

type FaqItem = { q: string; a: string };
type FaqCategory = { slug: string; title: string; intro: string; items: FaqItem[] };

const CATEGORIES: FaqCategory[] = [
  {
    slug: "budget",
    title: "Budget & Investment",
    intro:
      "Range pricing, payment terms, breakdown, dan apa yang menentukan total cost.",
    items: [
      {
        q: "Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?",
        a: "Range Rp 2.5–5 juta/pax untuk paket 2D1N standard, sudah include venue, F&B 3x, activity, transportation lokal, dan project management. Variasi tergantung tier venue dan kompleksitas activity. Paket budget conservative mulai Rp 1.8 juta/pax (1D2N glamping), premium executive bisa Rp 6 juta+/pax.",
      },
      {
        q: "Apakah ada hidden cost di luar proposal?",
        a: "Tidak. Proposal kami detailed breakdown — venue, F&B, logistics, talent, equipment, contingency, dan profit margin. Yang muncul di invoice = yang ada di proposal yang Anda approve. Add-on (jika ada) selalu konfirmasi tertulis dulu.",
      },
      {
        q: "Apakah harga sudah include PPN dan tax?",
        a: "Proposal kami transparan: subtotal + PPN 11% line-item terpisah. No 'tax' yang muncul mendadak di invoice. Faktur pajak available kalau perusahaan butuh untuk reimbursement.",
      },
      {
        q: "Apakah ada deposit atau down payment?",
        a: "Standard 30% deposit setelah proposal di-approve untuk lock venue & date. Sisa 70% bayar 3 hari sebelum event execution. Bisa adjust kalau ada kebutuhan finance team.",
      },
      {
        q: "Berapa biaya tambahan kalau pax bertambah mendekati hari H?",
        a: "Tambahan pax di-quote dengan unit price yang sama (transparent dari awal), tidak ada penalty. Selama venue masih punya kapasitas. Kalau perlu upgrade venue karena pax naik signifikan, kami negotiate dengan vendor venue dulu.",
      },
    ],
  },
  {
    slug: "process",
    title: "Process & Logistics",
    intro: "Timeline, briefing flow, dan eksekusi day-of.",
    items: [
      {
        q: "Berapa lama proses dari request proposal ke konfirmasi?",
        a: "Proposal lengkap dengan breakdown & 2 alternative venue dalam 24 jam setelah briefing call. Revision 1–2 hari. Konfirmasi venue & deposit 30%, siap di-eksekusi 3 minggu kemudian (urgent request bisa 4 hari, tergantung availability venue).",
      },
      {
        q: "Apakah bisa custom itinerary di-luar paket yang ditampilkan?",
        a: "Iya, 100%. Sample packages adalah starting point — setiap proposal disesuaikan dengan objective tim, jumlah pax, budget actual, dan preferences. Tidak ada 'paket fixed'.",
      },
      {
        q: "Bagaimana kalau pax berubah mendekati hari H?",
        a: "Standard contract allow +/- 10% pax tanpa adjustment cost up to 14 hari sebelum hari H. Di luar itu, kami negotiate dengan venue untuk minimum impact. Transparency soal cost adjustment selalu tertulis.",
      },
      {
        q: "Bagaimana penanganan kalau ada force majeure?",
        a: "Setiap program siapkan Plan A & Plan B (indoor backup activity, alternative venue). Contingency budget 5–8% include. Untuk full cancel due to force majeure, refund/reschedule policy clear di contract — 70–100% refund tergantung notice period.",
      },
      {
        q: "Apakah ada PIC senior on-site selama event?",
        a: "Iya, dedicated project manager senior dari briefing sampai event done. Bukan rotating freelancer. Hari-H ada full team on-site: PM, coordinator, MC, photographer, dan supporting crew sesuai scope.",
      },
    ],
  },
  {
    slug: "comparison",
    title: "Decision Comparisons",
    intro: "Vendor besar vs kecil, hotel vs villa, dan pilihan format.",
    items: [
      {
        q: "Apa bedanya vendor besar vs vendor kecil seperti kalian?",
        a: "Vendor besar (national agencies) biasanya rotating freelancer, factory feel, less personal. Kami spesialis B2B corporate di Bandung — senior planner dedicated, akses langsung ke venue (bukan calo), tenure tim 4+ tahun. Trade-off: kami fokus Bandung & Jawa Barat aja.",
      },
      {
        q: "Hotel vs villa untuk corporate event?",
        a: "Hotel: easier logistik, F&B in-house, ballroom siap pakai. Cocok untuk gathering formal 200+. Villa: private, customizable, more intimate. Cocok untuk retreat, executive offsite, atau leadership camp 8–80 pax. Bandung kami kerja dengan keduanya.",
      },
      {
        q: "Outbound vs indoor workshop untuk team building?",
        a: "Outbound: physically engaging, memorable, cocok untuk young teams atau pertumbuhan team spirit. Indoor workshop: more facilitated, focused outcomes, cocok untuk skill development atau strategic alignment. Kebanyakan klien kami pakai hybrid format.",
      },
    ],
  },
  {
    slug: "company",
    title: "About Us",
    intro: "Siapa kami dan hubungan dengan 7Summits Travel.",
    items: [
      {
        q: "Apakah Tour Bandung Corporate sama dengan 7Summits Travel?",
        a: "corporate.tourbandung.co.id adalah unit specialized dari 7Summits Travel yang fokus 100% di market corporate (B2B). Bukan retail leisure. Tim, methodology, dan portfolio sepenuhnya untuk handle complexity B2B corporate.",
      },
      {
        q: "Sudah berapa lama operasi?",
        a: "Sejak 2018. Sudah deliver 400+ corporate events, dari intimate executive offsite 8 pax sampai annual gathering 1.200 pax. 92% repeat booking rate dari client yang sudah pernah kerja bareng.",
      },
      {
        q: "Industri klien kalian apa saja?",
        a: "Tech (unicorn + scaleup), Banking (BUMN + private), FMCG global, Manufacturing MNC, Hospitality, Telco, Education, Healthcare, Media. Lihat client logo wall di homepage untuk industry mix.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Jawaban detail untuk pertanyaan paling sering ditanyakan HR."
        description="16 pertanyaan dalam 4 kategori. Jika pertanyaan lo belum di sini, langsung chat — kami respond avg 6 jam working hours."
      />

      <section className="py-16 md:py-24">
        <div className="container-1280">
          <div className="grid gap-12 lg:gap-16">
            {CATEGORIES.map((cat) => (
              <div key={cat.slug} className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="eyebrow-brand">{cat.title}</span>
                  <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                    {cat.title}
                  </h2>
                  <p className="mt-4 text-base text-slate leading-relaxed">
                    {cat.intro}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {cat.items.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors"
                    >
                      <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                        <h3 className="font-display text-lg text-ink leading-snug">
                          {item.q}
                        </h3>
                        <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="pb-24">
        <div className="container-1280">
          <div className="rounded-3xl border border-border bg-bone p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              Pertanyaan lo belum di sini?
            </h2>
            <p className="mt-4 text-base text-slate">
              Chat langsung — kami respond cepet, no template auto-reply.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
              >
                Request Proposal
                <ArrowRight size={14} />
              </Link>
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-12 text-sm font-medium hover:opacity-90 transition"
              >
                <Whatsapp size={14} />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
  faqPageSchema,
  howToSchema,
} from "@/lib/schema";

const PATH = "/b2b-corporate-event-specialist-bandung";
const URL = `${SITE.url}${PATH}`;
const TITLE = "B2B Corporate Event Specialist Bandung 2026 — 7 Kriteria Vendor untuk HR Procurement";
const DESCRIPTION =
  "Pilih vendor B2B corporate event Bandung yang benar: 7 kriteria wajib untuk HR procurement — discovery brief, line-item proposal, risk register, legal entity, dedicated PM, post-event report, NDA-ready. TourBandung Corporate, 400+ events sejak 2018.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} — TourBandung Corporate`,
    description: DESCRIPTION,
    url: URL,
    type: "article",
  },
};

const CRITERIA = [
  {
    title: "Discovery brief minimum 60 menit",
    detail:
      "Vendor B2B specialist mulai dengan briefing call yang gali objective bisnis (post-merger bonding? sales kickoff? leadership development?), bukan langsung kirim paket dari katalog. Kalau quote-nya keluar tanpa discovery — itu travel agent, bukan corporate planner.",
  },
  {
    title: "Line-item cost breakdown",
    detail:
      "Proposal harus list per komponen: venue, F&B, transport, activity, project management fee, contingency. Lump-sum quote = tidak bisa di-justify ke finance + risk hidden cost belakangan.",
  },
  {
    title: "Risk register + safety SOP terdokumentasi",
    detail:
      "Untuk grup 50+ pax, vendor harus punya risk register (medical emergency, weather, transport accident) + safety SOP per activity. Tanpa ini, perusahaan lo yang nanggung kalau ada insiden.",
  },
  {
    title: "Vendor punya legal entity + NPWP",
    detail:
      "B2B procurement butuh invoice resmi dengan NPWP. Vendor freelance / individu tidak bisa di-PO ke finance perusahaan besar. Cek legal status sebelum lanjut.",
  },
  {
    title: "Dedicated senior planner (bukan rotating freelancer)",
    detail:
      "Dari briefing sampai eksekusi harus dipegang 1 senior planner yang sama. Bukan briefing dengan sales A → eksekusi sama crew B yang nggak tau context. Ini sumber #1 miscommunication di event corporate.",
  },
  {
    title: "Post-event report dengan metrics + dokumentasi",
    detail:
      "Event delivery selesai bukan akhir. Vendor specialist kirim post-event report: attendance, NPS, satisfaction survey, foto/video bank, cost reconciliation. Ini yang lo butuh saat report ke C-level / Board.",
  },
  {
    title: "Confidentiality clause + NDA-ready",
    detail:
      "Untuk executive offsite atau strategic retreat, vendor harus siap tanda tangan NDA. Komunikasi tim event tidak boleh leak materi confidential. Vendor generic biasanya nggak terbiasa dengan ini.",
  },
];

const FAQS = [
  {
    question:
      "Apa beda B2B corporate event specialist dengan generic EO atau travel agent?",
    answer:
      "Specialist B2B fokus eksekusi event untuk perusahaan dengan SOP discovery → proposal → execution → post-event report. Generic EO/travel agent biasanya transactional: kirim paket dari katalog, eksekusi standar, tanpa accountability post-event. Specialist bisa di-PO oleh finance besar (legal entity + NPWP), generic seringkali freelance individu.",
  },
  {
    question: "Kenapa Bandung jadi pilihan utama untuk corporate event B2B?",
    answer:
      "Bandung punya kombinasi unik: akses cepat dari Jakarta (2-3 jam by tol/kereta cepat), variasi venue (gunung Lembang, glamping Pangalengan, beach Pangandaran, hotel city Bandung), iklim sejuk, dan kapasitas venue untuk 30-2.000 pax. Cost per pax 30-50% lebih efisien dibanding venue Jakarta atau Bali.",
  },
  {
    question:
      "Bagaimana procurement perusahaan saya bisa verify legitimacy vendor sebelum sign contract?",
    answer:
      "Minta: (1) NPWP + akta perusahaan PT/CV, (2) portfolio case study real dengan nama klien (atau anonymized untuk NDA), (3) referensi 2-3 klien existing untuk reference check, (4) sample proposal dengan line-item breakdown, (5) bukti asuransi event liability kalau ada. Vendor specialist akan kirim semua ini tanpa diminta.",
  },
  {
    question: "Berapa cost range untuk B2B corporate event di Bandung?",
    answer:
      "Rentang tipikal per pax: Conservative Rp 1.5–2.5 jt (1D2N standar), Standard Rp 2.5–4.5 jt (3D2N mid-tier), Premium Rp 4.5–7 jt (production-grade), All-Out Rp 7 jt+ (signature event). Multiply pax × cost per pax, plus 8% contingency. Total event 200 pax 3D2N standard ≈ Rp 600-900 juta.",
  },
  {
    question:
      "Bagaimana cara memilih vendor yang fit untuk skala event kami?",
    answer:
      "Match scale vendor ke scale event. Untuk 30-100 pax: vendor specialist ukuran kecil-menengah cukup. Untuk 200-500 pax: vendor dengan tim production + venue partnership. Untuk 500+ pax: vendor dengan track record proven di mass-scale event (cek case study eksplisit). Lo nggak butuh enterprise vendor buat event 50 pax — overkill di ops + budget.",
  },
  {
    question: "Berapa lama lead time ideal dari briefing ke event execution?",
    answer:
      "Standard: 4-8 minggu. Urgent (event dalam 2-4 minggu) bisa di-handle vendor specialist, tapi opsi venue & date jadi terbatas. Planning ahead (3+ bulan): bisa lock venue premium + custom production. Briefing → proposal 24-48 jam, revisi 1-2 hari, konfirmasi venue + deposit 30%.",
  },
];

export default function B2BSpecialistPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "B2B Corporate Event Specialist", url: URL },
    ]),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: `${SITE.url}/opengraph-image`,
      datePublished: "2026-05-15",
      dateModified: "2026-05-15",
      slug: PATH,
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Memilih Vendor B2B Corporate Event Bandung yang Tepat",
      description: "7 kriteria yang harus dicek HR/procurement sebelum sign kontrak vendor corporate event — dari discovery brief hingga NDA-readiness.",
      steps: [
        { name: "Pastikan Ada Discovery Brief Minimum 60 Menit", text: "Vendor B2B specialist mulai dengan briefing call mendalam untuk menggali objective bisnis — bukan langsung kirim paket dari katalog. Kalau quote keluar tanpa discovery, itu travel agent bukan corporate planner." },
        { name: "Minta Line-Item Cost Breakdown", text: "Proposal harus merinci per komponen: venue, F&B, transport, activity, PM fee, contingency. Lump-sum quote tidak bisa di-justify ke finance dan berisiko hidden cost." },
        { name: "Verifikasi Risk Register + Safety SOP", text: "Untuk grup 50+ pax, vendor wajib punya risk register (medical emergency, cuaca, transport) dan safety SOP per activity. Tanpa ini, perusahaan yang menanggung risiko jika ada insiden." },
        { name: "Cek Legal Entity + NPWP Vendor", text: "B2B procurement butuh invoice resmi dengan NPWP untuk proses PO ke finance. Vendor freelance atau individu tidak bisa di-PO oleh perusahaan besar — cek status legal sebelum lanjut." },
        { name: "Konfirmasi Dedicated Senior Planner", text: "Briefing sampai eksekusi harus dipegang 1 senior planner yang sama — bukan briefing dengan sales A lalu eksekusi dengan crew B yang tidak tahu konteks. Ini sumber #1 miscommunication di event corporate." },
        { name: "Minta Post-Event Report Template", text: "Vendor specialist kirim post-event report: attendance, NPS, satisfaction survey, foto/video bank, cost reconciliation. Ini yang dibutuhkan saat report ke C-level atau Board." },
        { name: "Pastikan Siap Tanda Tangan NDA", text: "Untuk executive offsite atau strategic retreat, vendor harus siap NDA. Komunikasi tim event tidak boleh leak materi confidential. Vendor generik biasanya tidak terbiasa dengan requirement ini." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Procurement lo butuh vendor B2B corporate event yang bisa di-PO?"
        context="B2B corporate event specialist Bandung"
      />
      <main>
        <PageHero
          eyebrow="For corporate procurement"
          title="Vendor B2B corporate event specialist di Bandung."
          description="Fokus eksekusi event untuk perusahaan: outing, team building, executive offsite. Legal entity + NPWP, line-item proposal, post-event report. Bukan freelance, bukan travel agent."
        />

        {/* Trust strip */}
        <section className="border-b border-divider bg-paper py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <GoogleReviewsBadge variant="compact" />
            <Link
              href="/proposal/request"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
            >
              Request RFP-ready proposal
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                <strong>B2B corporate event specialist</strong> berbeda dari generic EO atau travel agent karena fokus pada outcome bisnis, bukan sekadar booking venue. Vendor specialist punya{" "}
                <strong>legal entity + NPWP</strong> (bisa di-PO finance), dedicated senior planner dari briefing sampai eksekusi, line-item proposal transparan, dan post-event report dengan metrics. Untuk perusahaan di Bandung & sekitarnya, <strong>TourBandung Corporate</strong> telah mengeksekusi{" "}
                <strong>400+ corporate events sejak 2018</strong> — dari executive offsite 8 pax hingga annual gathering 1.200 pax.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {[
                  "Legal entity + NPWP",
                  "Dedicated senior PM",
                  "Line-item proposal",
                  "Post-event report",
                  "NDA-ready",
                ].map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-slate">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request RFP-ready proposal
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#criteria"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat 7 kriteria vendor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why B2B specialist */}
        <section className="py-16 md:py-24 bg-bone">
          <div className="container-1280">
            <div className="max-w-3xl">
              <span className="eyebrow-brand">Why specialist matters</span>
              <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
                Event corporate beda dengan event personal.
              </h2>
              <p className="mt-6 text-base md:text-lg text-slate leading-relaxed">
                Procurement perusahaan punya constraint berbeda dari individu:
                budget di-approve bertahap, vendor harus bisa di-PO oleh
                finance, ada compliance + risk management, dan event harus
                deliver outcome bisnis (bukan cuma fun). Vendor B2B specialist
                paham semua ini dari awal — generic EO atau travel agent
                biasanya nggak.
              </p>
              <p className="mt-4 text-base md:text-lg text-slate leading-relaxed">
                Halaman ini buat HR + GA + procurement yang lagi cari vendor.
                Kami detail 7 kriteria yang lo harus minta sebelum sign
                contract — supaya event-nya lancar, accountable, dan nggak
                ada surprise budget waktu rekonsiliasi.
              </p>
            </div>
          </div>
        </section>

        {/* Red flags */}
        <section className="py-12 md:py-16 border-b border-divider bg-paper">
          <div className="container-1280">
            <div className="max-w-3xl">
              <span className="eyebrow-brand">Red flags — hindari vendor ini</span>
              <h2 className="font-display mt-4 text-2xl md:text-3xl text-ink leading-tight">
                8 tanda vendor bukan B2B specialist.
              </h2>
              <p className="mt-4 text-base text-slate leading-relaxed">
                Vendor yang tidak cocok untuk corporate procurement biasanya menunjukkan pola ini sejak interaksi pertama:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Quote keluar dalam 5 menit tanpa discovery call",
                  "Proposal lump-sum tanpa breakdown per komponen",
                  "Tidak punya NPWP / legal entity terdaftar",
                  "PM berganti-ganti antara briefing dan eksekusi",
                  "Tidak bisa kirim referensi klien korporat sebelumnya",
                  "Tidak punya risk register atau safety SOP tertulis",
                  "Tidak siap tanda tangan NDA untuk executive event",
                  "Post-event hanya kirim foto — tanpa laporan metrics",
                ].map((flag) => (
                  <li key={flag} className="flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50/50 px-4 py-3 text-sm text-ink leading-relaxed">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7 Criteria */}
        <section id="criteria" className="py-16 md:py-24 bg-paper">
          <div className="container-1280">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow-brand">Checklist seleksi vendor</span>
              <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink leading-tight">
                7 kriteria yang procurement lo harus check.
              </h2>
            </div>

            <ol className="space-y-6 max-w-3xl">
              {CRITERIA.map((c, i) => (
                <li
                  key={c.title}
                  className="flex gap-5 rounded-2xl border border-border bg-paper p-6 md:p-7"
                >
                  <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand-deep font-display text-lg tabular">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm text-slate leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-3xl bg-ink p-8 md:p-10 text-paper max-w-3xl">
              <h3 className="font-display text-xl md:text-2xl">
                Mau dive deeper? Lihat methodology kami.
              </h3>
              <p className="mt-3 text-sm md:text-base text-cream/80 leading-relaxed">
                3 named framework yang kami pakai untuk discovery, eksekusi,
                dan post-event review. Plus head-to-head comparison specialist
                vs generic EO di 12 dimensi.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/methodology"
                  className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-5 h-11 text-sm font-medium hover:bg-brand hover:text-paper transition"
                >
                  Methodology
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/specialist-vs-generic-eo"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/5 backdrop-blur text-paper px-5 h-11 text-sm font-medium hover:bg-paper/10 transition"
                >
                  Specialist vs Generic EO
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/5 backdrop-blur text-paper px-5 h-11 text-sm font-medium hover:bg-paper/10 transition"
                >
                  Pricing tiers
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty across event types */}
        <section className="py-16 md:py-20 bg-bone border-t border-divider">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">Across event types</span>
              <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink leading-tight">
                Kami specialist di semua format corporate event.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/outing-kantor-bandung",
                  label: "Outing kantor",
                  desc: "Mid-size to mass scale, multi-track",
                },
                {
                  href: "/team-building-bandung",
                  label: "Team building",
                  desc: "Methodology-driven, outcome metrics",
                },
                {
                  href: "/corporate-gathering-bandung",
                  label: "Corporate gathering",
                  desc: "Annual, awarding, production grade",
                },
                {
                  href: "/executive-offsite-bandung",
                  label: "Executive offsite",
                  desc: "C-suite, confidential, strategic",
                },
                {
                  href: "/company-retreat-bandung",
                  label: "Company retreat",
                  desc: "Multi-day, immersive, focus",
                },
                {
                  href: "/leadership-retreat-jawa-barat",
                  label: "Leadership retreat",
                  desc: "Senior cohort development",
                },
                {
                  href: "/employee-gathering-bandung",
                  label: "Employee gathering",
                  desc: "Inclusive, family-friendly",
                },
                {
                  href: "/glamping-corporate-bandung",
                  label: "Glamping corporate",
                  desc: "Unique outdoor, premium",
                },
                {
                  href: "/outbound-perusahaan-bandung",
                  label: "Outbound perusahaan",
                  desc: "Safety-first, certified instructor",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group rounded-2xl border border-border bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-ink-soft hover:shadow-[0_12px_32px_rgba(15,31,26,0.07)]"
                >
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-brand mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-display text-base text-ink leading-snug group-hover:text-brand-deep transition-colors">
                        {s.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-mute">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related case studies — proof of execution */}
        <RelatedCaseStudies
          serviceSlugs={["company-gathering", "executive-offsite", "leadership-camp"]}
          title="Bukti eksekusi untuk corporate client."
          description="Case studies dari berbagai industry: tech, banking, FMCG, manufacturing. Lengkap dengan brief, scope, dan outcome metrics."
        />

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-paper border-t border-divider">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">FAQ</span>
              <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink leading-tight">
                Pertanyaan procurement umum.
              </h2>
            </div>
            <div className="space-y-3 max-w-3xl">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-paper px-6 py-4"
                >
                  <summary className="cursor-pointer font-medium text-ink hover:text-brand-deep flex items-start justify-between gap-3 list-none">
                    <span>{faq.question}</span>
                    <span className="text-slate-mute text-xs mt-1 transition-transform group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Procurement lo butuh proposal RFP-ready?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Free briefing call 60 menit. Kami kirim proposal dengan
              line-item breakdown + risk register dalam 24 jam — siap di-PO
              oleh finance.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request RFP-ready proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("B2B corporate event specialist Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

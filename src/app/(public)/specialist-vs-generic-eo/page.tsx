import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { ArrowRight, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
  serviceSchema,
  faqPageSchema,
  howToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "EO Corporate Bandung: Specialist vs Generic — 12 Dimensi Perbandingan",
  description:
    "Apa bedanya corporate event specialist vs generic EO atau travel agent? 12 dimensi comparison: discovery process, accountability, risk management, pricing transparency, post-event reporting. Untuk HR yang mau pick smart.",
  alternates: { canonical: `${SITE.url}/specialist-vs-generic-eo` },
  openGraph: {
    title: "Corporate Specialist vs Generic EO — TourBandung Corporate",
    description:
      "12 dimensi comparison corporate event specialist vs generic EO untuk HR yang mau pick vendor.",
    url: `${SITE.url}/specialist-vs-generic-eo`,
    type: "article",
    images: [{ url: IMAGES.caseStudyLarge.src, width: 1200, height: 630, alt: IMAGES.caseStudyLarge.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Specialist vs Generic EO — 12 Dimensi Comparison",
    description: "12 dimensi membedakan specialist B2B vs generic EO. Discovery, transparency, accountability, post-event.",
    images: [IMAGES.caseStudyLarge.src],
  },
};

const COMPARISONS: {
  dimension: string;
  generic: string;
  specialist: string;
  why: string;
}[] = [
  {
    dimension: "Discovery process",
    generic: "Email brief → kirim 3 paket dari katalog dalam 24 jam.",
    specialist: "Wajib briefing call 60–90 menit untuk articulate objective sebelum design.",
    why: "Tanpa discovery, design event jadi opinion vendor, bukan outcome-driven. Skip discovery = generic event.",
  },
  {
    dimension: "Pricing transparency",
    generic: "Total package price. \"All included\". Tidak ada breakdown line-item.",
    specialist: "Breakdown line-item: venue, F&B, activity, transport, project management, contingency. Markup di-disclose.",
    why: "Opaque pricing = HR susah justify ke finance + susah compare apel-ke-apel. Transparency adalah baseline profesional.",
  },
  {
    dimension: "Venue selection",
    generic: "Dari katalog inventory sendiri (pricing markup tinggi karena exclusive).",
    specialist: "2–3 alternative venue dengan trade-off matrix. Open marketplace, no commission lock-in.",
    why: "Vendor yang locked ke venue tertentu cenderung push venue itu walaupun tidak fit. Curation independent = output objektif.",
  },
  {
    dimension: "Risk management",
    generic: "\"Don't worry, nanti kita atur kalau ada apa-apa.\"",
    specialist: "Risk register 3-tier, RS partner contact, indoor backup terdokumentasi, insurance breakdown.",
    why: "Worst case akan terjadi suatu saat. Vendor tanpa risk plan = lo yang harus crisis manage di hari-H.",
  },
  {
    dimension: "Activity design",
    generic: "Standard menu (paintball, outbound, dinner BBQ). Apply same template ke semua client.",
    specialist: "Activity di-frame untuk hit specific outcome. Energy curve di-design eksplisit. Parallel tracks untuk audience diversity.",
    why: "Audience generic = engagement output generic. Cross-generational team butuh parallel tracks, bukan single stream.",
  },
  {
    dimension: "Team & accountability",
    generic: "1–2 founder + freelance pool yang rotasi per event. Setiap event briefing dari nol.",
    specialist: "Full-time senior team. Single point of contact yang sama dari brief s/d post-event.",
    why: "Rotating freelance = institutional memory hilang. Continuity = quality.",
  },
  {
    dimension: "Field execution",
    generic: "Manager EO yang pegang banyak event paralel. Hari-H absent atau distracted.",
    specialist: "Field commander dedicated yang onsite dari setup H-1 sampai closing. SPOC untuk HR.",
    why: "Crisis di lapangan butuh decision-maker yang present. Vendor yang split focus = HR yang stress di hari-H.",
  },
  {
    dimension: "Post-event closure",
    generic: "Invoice + foto WhatsApp grup. End of relationship.",
    specialist: "Post-event report terstruktur: attendance, NPS, photo deliverables, invoice reconciliation, recommendation next event.",
    why: "HR butuh deliverable yang bisa di-share ke management. Tanpa report, hard sell budget tahun depan.",
  },
  {
    dimension: "Outcome measurement",
    generic: "\"Yang penting peserta happy.\" No baseline, no measurement.",
    specialist: "Pre-event baseline + post-event 1-week survey + 6-month retention check. ROI framework siap-share ke CFO.",
    why: "Tanpa measurement, susah justify investment + susah improve next event. Soft outcome = boleh, tapi quantifiable.",
  },
  {
    dimension: "Contract & legal",
    generic: "Quote singkat di WhatsApp. Tidak ada klausul force majeure, refund, atau SLA.",
    specialist: "Kontrak terstruktur dengan force majeure clause, refund schedule, SLA komunikasi, dan deliverables explicit.",
    why: "Tanpa kontrak yang fair, HR exposed kalau ada cancellation, dispute, atau force majeure.",
  },
  {
    dimension: "Specialty depth",
    generic: "Generalist — wedding, gathering, festival, family day, semuanya bisa.",
    specialist: "Focus B2B corporate event di Jawa Barat — 400+ event delivered di segment ini sejak 2018.",
    why: "Generalist tahu sedikit dari banyak hal. Specialist tahu banyak dari sedikit. Corporate event butuh kedalaman segment.",
  },
  {
    dimension: "Compliance & SOP",
    generic: "Ad-hoc per event. SOP tidak terdokumentasi.",
    specialist: "K3 safety standard, vendor SLA tier, dietary handling protocol, dan medical evacuation plan — terdokumentasi.",
    why: "Untuk regulated industry (banking, healthcare, BUMN), vendor tanpa SOP terdokumentasi = compliance risk.",
  },
];

const FAQS = [
  {
    question: "Saya butuh outing simple, apakah specialist overkill?",
    answer:
      "Tidak. Specialist juga punya tier Foundation (Rp 1.5–2.5 jt/pax) yang fit untuk quarterly bonding 30–80 pax. Yang beda bukan harga — yang beda adalah proses (discovery, transparency, accountability) dan ekspektasi outcome.",
  },
  {
    question: "Generic EO harganya pasti lebih murah, ya?",
    answer:
      "Tidak selalu. Karena specialist transparent dengan breakdown line-item, lo bisa compare apel-ke-apel. Generic EO seringkali quote total yang tampaknya murah, tapi setelah dihitung ulang (cost venue + F&B + transport real), markup-nya bahkan lebih tinggi karena diembed di total package.",
  },
  {
    question: "Apa risiko nyata pakai generic EO untuk corporate event?",
    answer:
      "3 risiko utama: (1) outcome generic — peserta tidak ingat event 6 bulan kemudian, susah justify budget tahun depan; (2) crisis management di hari-H tanpa risk plan; (3) post-event closure absent — invoice langsung tutup, no learning untuk next event.",
  },
  {
    question: "Bagaimana cara validasi vendor itu specialist atau generalist?",
    answer:
      "4 tes cepat: (a) minta sample post-event report dari client sebelumnya — generic vendor biasanya gak punya; (b) minta risk register template — generic vendor bilang \"nanti kita buat\"; (c) check apakah mereka kasih breakdown line-item — generic vendor refuse; (d) check apakah mereka demand discovery call sebelum quote — generic vendor langsung kirim 3 paket.",
  },
];

export default function CompareSpecialistVsGenericPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      {
        name: "Specialist vs Generic EO",
        url: `${SITE.url}/specialist-vs-generic-eo`,
      },
    ]),
    articleSchema({
      headline: "Corporate Specialist vs Generic EO/Travel Agent — 12 Dimensi Comparison",
      description:
        "Comparison detail antara corporate event specialist dan generic EO untuk HR yang mau pick vendor smart.",
      image: IMAGES.caseStudyLarge.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: "/specialist-vs-generic-eo",
    }),
    serviceSchema({
      name: "Corporate Event Specialist B2B Bandung",
      description:
        "Layanan corporate event specialist B2B di Bandung — discovery-first approach, line-item proposal transparan, dedicated senior PM, dan post-event report. Berbeda dari generic EO.",
      priceRange: "Rp 1.500.000 - Rp 7.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Membedakan Corporate Event Specialist vs Generic EO",
      description:
        "4 tes cepat untuk validasi apakah vendor yang Anda pertimbangkan adalah specialist B2B atau generic EO yang nyambi corporate.",
      steps: [
        {
          name: "Cek Apakah Ada Discovery Brief Sebelum Quote",
          text: "Specialist B2B selalu minta briefing call 60–90 menit sebelum kirim proposal. Generic EO langsung kirim 3 paket dari katalog dalam 24 jam tanpa memahami objective Anda.",
        },
        {
          name: "Minta Line-Item Breakdown, Bukan Lump-Sum",
          text: "Specialist memberikan breakdown per komponen: venue, F&B, activity, transport, PM fee, contingency. Generic EO kirim total 'all included' tanpa rincian — Anda tidak bisa justify ke finance.",
        },
        {
          name: "Minta Sample Post-Event Report dari Client Sebelumnya",
          text: "Specialist punya template post-event report dengan NPS, attendance, cost reconciliation, dan rekomendasi berikutnya. Generic EO biasanya tidak punya — invoice selesai, urusan selesai.",
        },
        {
          name: "Verifikasi Dedicated Senior PM dari Awal sampai Akhir",
          text: "Specialist assign 1 senior PM yang sama dari briefing sampai on-site. Generic EO briefing dengan sales, eksekusi dengan crew berbeda yang tidak tahu konteks — ini sumber #1 miscommunication.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Comparison"
          title="Corporate specialist vs generic EO/travel agent."
          description="12 dimensi yang membedakan specialist B2B corporate event vs generic EO atau travel agent retail. Bukan soal harga — soal proses, accountability, dan outcome."
        />

        {/* Stat strip */}
        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">12</strong> dimensi comparison</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Update May 2026</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Verified by senior planner</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                <strong>Corporate event specialist</strong> berbeda dari generic EO atau travel agent dalam{" "}
                <strong>4 dimensi kritis</strong>: (1) discovery brief wajib 60–90 menit sebelum quote; (2) line-item proposal transparan per komponen; (3) dedicated senior PM dari briefing sampai eksekusi; (4) post-event report dengan NPS dan cost reconciliation. Generic EO skip semua ini dan kirim paket dari katalog.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {["Discovery-first", "Line-item transparan", "Senior PM dedicated", "Post-event report", "Legal entity + NPWP"].map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-slate">{t}</span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request proposal specialist
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/faq/vendor"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  FAQ vendor selection →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-10 lg:grid-cols-3 items-start">
              <div className="lg:col-span-1">
                <span className="eyebrow-brand">Kenapa comparison ini matter</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                  Sebagian besar HR pick vendor by harga. Itu masalahnya.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Pertanyaan paling sering: <em>&quot;mendingan pakai EO biasa atau corporate specialist?&quot;</em> Jawaban honest: tergantung scope, audience, dan ekspektasi outcome.
                </p>
                <p>
                  Tapi banyak HR pick by total package price doang — tanpa visibility ke proses, accountability, dan post-event closure. Hasilnya: outing tahun ini sama generiknya dengan tahun lalu, dan budget tahun depan susah di-justify ke finance.
                </p>
                <p>
                  12 dimensi di bawah ini adalah filter yang kami rekomendasikan HR pakai saat shortlist vendor — terlepas dari pilih kami atau bukan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="space-y-4">
              {COMPARISONS.map((row, i) => (
                <article
                  key={i}
                  className="rounded-3xl border border-border bg-paper p-7 md:p-8 hover:border-ink-soft transition-colors"
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display text-3xl md:text-4xl text-brand-deep tabular leading-none">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                      {row.dimension}
                    </h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 mb-5">
                    <div className="rounded-2xl bg-cream/40 border border-divider p-5">
                      <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-2">
                        Generic EO / Travel agent
                      </p>
                      <p className="text-sm md:text-base text-slate leading-relaxed">
                        {row.generic}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-brand/5 border border-brand/20 p-5">
                      <p className="text-xs uppercase tracking-wider text-brand-deep font-medium mb-2">
                        Corporate specialist
                      </p>
                      <p className="text-sm md:text-base text-ink leading-relaxed">
                        {row.specialist}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-mute leading-relaxed border-t border-divider/60 pt-4">
                    <span className="font-medium text-slate">Kenapa matter — </span>
                    {row.why}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">FAQ</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                Pertanyaan yang sering muncul dari HR.
              </h2>
            </div>
            <div className="max-w-4xl space-y-3">
              {FAQS.map((q, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors"
                >
                  <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                      {q.question}
                    </h3>
                    <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate leading-relaxed">{q.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Validasi kami pakai 12 dimensi di atas.
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Free 15-menit briefing — discovery brief proper, breakdown pricing transparent, sample risk register. Pre-kontrak, no commitment.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Proposal <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("specialist vs generic comparison")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar
          message="Brief lewat 5-Pillar Design™ + breakdown transparent — free 15 menit."
          context="compare-specialist-vs-generic"
        />
      </main>
    </>
  );
}

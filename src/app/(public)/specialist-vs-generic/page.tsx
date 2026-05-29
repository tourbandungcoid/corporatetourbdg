import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Check } from "@/components/icons/Icons";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  articleSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Specialist vs Generic Event Organizer — Mengapa B2B Corporate Events Butuh Specialist?",
  description:
    "Perbedaan fundamental antara specialist B2B corporate event organizer (TourBandung) vs generic travel agent yang coba handle corporate. Framework, accountability, ROI measurement, outcome design.",
  alternates: { canonical: `${SITE.url}/specialist-vs-generic` },
  openGraph: {
    title: "Specialist vs Generic EO — Mengapa Specialist Itu Penting?",
    description: "Perbedaan B2B corporate event specialist vs generic travel agent.",
    url: `${SITE.url}/specialist-vs-generic`,
    type: "article",
  },
};

export default function SpecialistVsGenericPage() {
  const schema = combineSchemas(
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Specialist vs Generic", url: `${SITE.url}/specialist-vs-generic` },
    ]),
    articleSchema({
      headline: "Specialist vs Generic Event Organizer — Perbedaan Fundamental",
      description: metadata.description!,
      slug: "/specialist-vs-generic",
      authorName: "TourBandung Corporate",
      authorJobTitle: "B2B Corporate Event Specialist",
    })
  );

  const comparisons = [
    {
      category: "Methodology",
      specialist: "6 named frameworks (5-Pillar Design™, BOTS™, ORT™, 3-Phase Briefing, AG ROI Model, VVA™) — proprietary, outcome-driven",
      generic: "Ad-hoc, no structured methodology — setiap event 'baru' disesuaikan tanpa framework",
    },
    {
      category: "Team Structure",
      specialist: "Senior planners dedicated per project (avg tenure 4+ tahun) — single point of accountability",
      generic: "Rotating freelance coordinators — komunikasi fragmented, knowledge silos",
    },
    {
      category: "Vendor Relationships",
      specialist: "60+ direct venue partnerships (no middleman markup) — negotiating power, reliability",
      generic: "Generic list dari multiple vendors — calo commission, inconsistent quality",
    },
    {
      category: "ROI Measurement",
      specialist: "AG ROI Model — retention impact, productivity lift, team engagement metrics quantified",
      generic: "'Event was fun' — qualitative feedback only, no business outcome tracking",
    },
    {
      category: "Proposal Timeline",
      specialist: "Custom 24-hour proposal dengan line-item breakdown — strategic brief first, design after",
      generic: "Template proposals (generic) atau 5-7 hari turnaround — design misalignment risk",
    },
    {
      category: "Pricing Transparency",
      specialist: "4-tier pricing (Foundation–Bespoke) dengan breakdown detail — no hidden costs 6 tahun track record",
      generic: "Paket pricing (ambiguous) — scope creep risk, hidden add-ons di invoicing",
    },
    {
      category: "Risk Management",
      specialist: "ORT™ (Outbound Risk Tier) — safety-first activity categorization, contingency protocol aktif",
      generic: "Generic safety checklist — insurance minimal, risk ownership unclear",
    },
    {
      category: "Communication",
      specialist: "Senior planner respond dalam 6 jam (avg 2.5 hours) — senior leadership visibility",
      generic: "Coordinator respond 24-48 jam — escalation path unclear, decision lag",
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Specialist vs Generic"
          title="Mengapa B2B corporate events butuh specialist?"
          description="Generic travel agent bisa handle leisure trips atau small corporate events. Tapi untuk structured corporate gatherings dengan outcome measurement, ROI accountability, dan senior engagement — lo butuh specialist yang 100% fokus di market ini."
        />

        <section className="py-20 md:py-28">
          <div className="container-1280">
            <div className="max-w-4xl mx-auto">
              {/* Intro */}
              <div className="mb-16 space-y-6">
                <p className="text-lg text-slate leading-relaxed">
                  Selama 6 tahun, kami notice pattern yang sama: corporate teams yang mulai dengan generic EO
                  eventually switch ke specialist. Kenapa? Karena corporate events itu fundamentally berbeda dari leisure travel atau
                  small gatherings.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  Berikut breakdown perbedaan — bukan judgment, just structural facts.
                </p>
              </div>

              {/* Comparison table */}
              <div className="mb-16 space-y-3">
                <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-4 mb-4">
                  <div className="font-display text-sm font-medium text-ink px-4 py-3">Category</div>
                  <div className="font-display text-sm font-medium text-brand px-4 py-3">Specialist (TourBandung)</div>
                  <div className="font-display text-sm font-medium text-slate px-4 py-3">Generic Travel Agent</div>
                </div>
                {comparisons.map((item, i) => (
                  <div key={i} className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-4 border border-border rounded-xl overflow-hidden">
                    <div className="bg-brand-light/20 px-4 py-3 font-medium text-sm text-ink">{item.category}</div>
                    <div className="px-4 py-3 text-sm text-slate bg-paper">{item.specialist}</div>
                    <div className="px-4 py-3 text-sm text-slate-mute bg-cream/40">{item.generic}</div>
                  </div>
                ))}
              </div>

              {/* Why it matters */}
              <div className="rounded-3xl border border-brand/20 bg-brand-light/5 p-8 md:p-12 mb-16">
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">Mengapa ini penting?</h2>
                <ul className="space-y-4">
                  {[
                    "Corporate events affect organizational culture, retention, productivity — bukan just 'fun activity'",
                    "ROI measurement di corporate budget cycles matters — CFO butuh numbers, bukan anecdotes",
                    "Senior team expectations di corporate gathering berbeda dari leisure trip — perception gap besar",
                    "Risk liability di corporate events lebih complex — insurance, safety protocols, legal accountability",
                    "Repeat booking rate (92% kami) indikator trust — company datang lagi karena outcome delivered, bukan price",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-brand"><Check size={16} /></span>
                      <span className="text-slate leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center space-y-6">
                <p className="text-lg text-slate max-w-2xl mx-auto">
                  Kalau lo sudah familiar dengan generic EO limitations dan ready untuk specialist approach
                  dengan structured methodology & outcome measurement:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/proposal/request"
                    className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-14 text-base font-medium hover:bg-brand-deep transition-colors"
                  >
                    Request Proposal
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/methodology"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink px-8 h-14 text-base font-medium hover:bg-ink hover:text-paper transition-colors"
                  >
                    Lihat 6 Frameworks Kami
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 bg-brand-light/5 border-y border-divider">
          <div className="container-1280 text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-slate-mute uppercase tracking-wide">400+ events delivered • 92% repeat rate • 4.9⭐ from 105+ clients</p>
            <p className="text-base text-slate">
              Companies yang started dengan generic EO eventually realize: specialist approach di corporate events ROI-positive.
              Kami prove it setiap day dengan outcome metrics.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

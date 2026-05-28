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
  title: "Transparent Pricing Model Penjelasan — BOTS™ 4 Tier System untuk Corporate Events",
  description:
    "BOTS™ adalah transparent pricing model kami untuk corporate outing. Foundation (Rp 1.5–2.5jt/pax) ke Bespoke (Rp 7jt+). Line-item breakdown, no hidden costs.",
  alternates: { canonical: `${SITE.url}/transparent-pricing-model` },
  openGraph: {
    title: "BOTS™ Transparent Pricing — 4 Tier Model Explained",
    description: "Foundation, Elevated, Signature, Bespoke — transparent breakdown tanpa hidden costs.",
    url: `${SITE.url}/transparent-pricing-model`,
    type: "article",
  },
};

export default function TransparentPricingPage() {
  const schema = combineSchemas(
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Transparent Pricing", url: `${SITE.url}/transparent-pricing-model` },
    ]),
    articleSchema({
      headline: "BOTS™ Transparent Pricing Model — Corporate Event Tiers Explained",
      description: metadata.description!,
      slug: "/transparent-pricing-model",
      authorName: "TourBandung Corporate",
      authorJobTitle: "B2B Corporate Event Specialist",
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Pricing Philosophy"
          title="BOTS™ — Transparent Pricing tanpa Hidden Costs."
          description="BOTS™ (Bandung Outcome-Tier System) adalah pricing model kami untuk corporate events. 4 tier dari Foundation ke Bespoke — semua dengan line-item breakdown. Tidak ada surprise charge. Finance team Anda akan love the clarity."
        />

        <section className="py-20 md:py-28">
          <div className="container-1280">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Philosophy */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">Mengapa Kami Gunakan BOTS™?</h2>
                <div className="space-y-4 text-slate text-lg">
                  <p>
                    Pricing di corporate event industry traditionally ambiguous. Packages with vague inclusions,
                    scope creep di invoicing, hidden add-ons yang jadi shock di final bill.
                  </p>
                  <p>
                    Kami pilih berbeda. BOTS™ structure — Foundation through Bespoke — memberikan clarity tanpa
                    mengorbankan flexibility.
                  </p>
                  <p>
                    Setiap tier punya explicit inclusions, exclusions, dan use-case profile. CFO lo bisa review breakdown,
                    make an informed choice, approve dengan confidence.
                  </p>
                </div>
              </div>

              {/* The 4 Tiers */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-10">The 4 Tiers</h2>
                <div className="space-y-8">
                  {[
                    {
                      tier: "Foundation",
                      range: "Rp 1.5–2.5 jt/pax",
                      forWho: "Quarterly bonding, 1-day refresh, basic team building",
                      best: "Teams yang sudah saling kenal",
                      includes: [
                        "Venue rental (8–10 hours)",
                        "F&B 3x (welcome snack + lunch + break)",
                        "1–2 activity sessions",
                        "Basic sound system + MC",
                        "Local transport + insurance",
                      ],
                      pax: "30–80 people",
                    },
                    {
                      tier: "Elevated",
                      range: "Rp 2.5–4.5 jt/pax",
                      forWho: "Annual employee gathering, kick-off, mid-year event",
                      best: "Mainstream corporate teams",
                      includes: [
                        "1 night accommodation",
                        "F&B 5x (full meals + snacks)",
                        "Professional photography",
                        "Themed dinner concept",
                        "Premium sound + stage lighting",
                      ],
                      pax: "80–200 people",
                    },
                    {
                      tier: "Signature",
                      range: "Rp 4.5–7 jt/pax",
                      forWho: "Annual celebration, anniversary, award night",
                      best: "Premium recognition events",
                      includes: [
                        "2 nights accommodation",
                        "Gala dinner + curated meals",
                        "Live band + DJ",
                        "Full stage setup + LED screen",
                        "Drone aerial footage",
                        "Premium merchandise",
                      ],
                      pax: "100–300 people",
                    },
                    {
                      tier: "Bespoke",
                      range: "Rp 7 jt+/pax",
                      forWho: "C-suite retreat, strategic planning, intimate executive offsite",
                      best: "Leadership confidentiality required",
                      includes: [
                        "1 pax per room (privacy)",
                        "Private chef tasting menu",
                        "Executive facilitator",
                        "White-glove concierge",
                        "Dedicated photographer/videographer",
                        "NDA + confidentiality protocol",
                      ],
                      pax: "8–25 people",
                    },
                  ].map((tier, i) => (
                    <div
                      key={i}
                      className="rounded-3xl border border-border p-8 md:p-10 space-y-6 hover:shadow-lg transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl text-ink mb-2">{tier.tier}</h3>
                          <p className="text-lg font-medium text-brand">{tier.range}</p>
                        </div>
                        <div className="text-right text-sm text-slate-mute">
                          <p className="mb-1">{tier.pax}</p>
                          <p>participants</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-slate-mute font-medium mb-2">
                            Ideal untuk
                          </p>
                          <p className="text-slate font-medium">{tier.forWho}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-slate-mute font-medium mb-2">
                            Best fit
                          </p>
                          <p className="text-slate font-medium">{tier.best}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-mute font-medium mb-3">
                          Termasuk
                        </p>
                        <ul className="space-y-2">
                          {tier.includes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-slate">
                              <span className="mt-1 text-brand"><Check size={14} /></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why this works */}
              <div className="rounded-3xl bg-brand-light/5 border border-brand/10 p-8 md:p-12">
                <h3 className="font-display text-2xl text-ink mb-6">Why BOTS™ Works</h3>
                <ul className="space-y-3">
                  {[
                    "Clarity — setiap tier jelas scope-nya. No ambiguity.",
                    "Flexibility — tiers scalable. Bisa adjust dalam range, atau naik tier.",
                    "Accountability — transparent breakdown = easy approval dari finance/leadership.",
                    "Predictability — no scope creep surprises. What you see is what you get.",
                    "Benchmarking — tiers align dengan industry standard untuk pricing fairness.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate">
                      <span className="mt-1 text-brand"><Check size={16} /></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center space-y-6">
                <p className="text-lg text-slate">
                  Ready untuk transparent proposal breakdown dengan line-item detail?
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-14 text-base font-medium hover:bg-brand-deep transition-colors"
                  >
                    View Full Pricing
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/proposal/request"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink px-8 h-14 text-base font-medium hover:bg-ink hover:text-paper transition-colors"
                  >
                    Request Custom Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

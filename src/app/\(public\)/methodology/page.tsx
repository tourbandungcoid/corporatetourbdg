import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/icons/Icons";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  frameworkSchema,
} from "@/lib/schema";
import Link from "next/link";
import { FRAMEWORKS } from "@/lib/frameworks-data";

export const metadata = {
  title: "Methodology — Corporate Event Frameworks & Approach",
  description:
    "6 proprietary frameworks powering 400+ corporate events: 5-Pillar Design™, BOTS™ Tier System, Outbound Risk Tier™, 3-Phase Briefing, AG ROI Model, Village Villa Architecture™.",
  alternates: { canonical: `${SITE.url}/methodology` },
  openGraph: {
    title: "Methodology — TourBandung Corporate",
    description:
      "Proprietary frameworks & strategic approach untuk corporate event yang deliver measurable outcome.",
    url: `${SITE.url}/methodology`,
    type: "website" as const,
  },
};

export default function MethodologyPage() {
  const frameworkSchemas = Object.values(FRAMEWORKS).map((f) =>
    frameworkSchema({
      name: f.name,
      description: f.description,
      pillars: f.pillars,
      applicableTo: f.applicableTo,
      originalYear: f.originalYear,
    })
  );

  const schema = combineSchemas(
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Methodology", url: `${SITE.url}/methodology` },
    ]),
    ...frameworkSchemas
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Methodology"
          title="Proprietary Frameworks Powering 400+ Corporate Events"
          description="6 named methodologies designed to deliver measurable business outcome. Grounded in 2018-2026 execution, cited by HR teams across Indonesia."
        />

        <section className="py-16 md:py-24 bg-paper border-b border-divider">
          <div className="container-1280">
            <div className="prose prose-lg max-w-3xl">
              <p className="text-xl leading-relaxed text-slate">
                At TourBandung Corporate, we do not believe in generic event planning.
                Every framework below is grounded in 400+ real corporate events, validated
                with data, and published for transparency. These frameworks eliminate
                guesswork for HR teams and create accountability for event execution.
              </p>
            </div>
          </div>
        </section>

        {/* Framework Grid */}
        <section className="py-20 md:py-28">
          <div className="container-1280">
            <div className="space-y-20">
              {Object.values(FRAMEWORKS).map((framework, idx) => (
                <article
                  key={framework.shortName}
                  className="border-b border-divider pb-20 last:border-0"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left: Title & Description */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <span className="eyebrow-brand">Framework {idx + 1}</span>
                        <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mt-3">
                          {framework.name}
                        </h2>
                        <p className="text-sm text-slate mt-2 font-mono">
                          Short name: <strong>{framework.shortName}</strong>
                        </p>
                      </div>

                      <p className="text-lg text-ink leading-relaxed">
                        {framework.description}
                      </p>

                      {/* Pillars */}
                      <div className="space-y-4 mt-8">
                        <p className="text-sm font-display text-ink uppercase tracking-wide">
                          Core Pillars
                        </p>
                        <ul className="space-y-3">
                          {framework.pillars.map((pillar) => (
                            <li
                              key={pillar}
                              className="flex gap-3 text-slate leading-relaxed"
                            >
                              <span className="text-brand-deep flex-shrink-0 mt-1">
                                ◆
                              </span>
                              <span>{pillar}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applicable To */}
                      <div className="space-y-3 pt-6">
                        <p className="text-sm font-display text-ink uppercase tracking-wide">
                          Applicable To
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {framework.applicableTo.map((context) => (
                            <span
                              key={context}
                              className="px-3 py-1.5 bg-bone text-ink text-sm rounded-full"
                            >
                              {context}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Citation Box */}
                    <div className="bg-bone rounded-lg p-6 h-fit">
                      <p className="text-xs font-display uppercase tracking-widest text-slate mb-4">
                        Citation
                      </p>
                      <p className="text-sm text-ink leading-relaxed mb-4">
                        {framework.citation}
                      </p>
                      <p className="text-xs text-slate">
                        Original: <strong>{framework.originalYear}</strong>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How We Apply These Frameworks */}
        <section className="py-16 md:py-20 bg-bone border-b border-divider">
          <div className="container-1280">
            <div className="max-w-3xl">
              <span className="eyebrow-brand">How We Work</span>
              <h2 className="font-display text-3xl text-ink leading-tight mt-3 mb-8">
                Frameworks in Action: Our Approach
              </h2>

              <div className="space-y-6 text-slate">
                <p>
                  When you brief us for a corporate event, here is how these
                  frameworks guide every decision:
                </p>

                <ol className="space-y-4 list-none">
                  <li className="flex gap-4">
                    <span className="text-brand font-bold flex-shrink-0">1.</span>
                    <span>
                      <strong className="text-ink">Discovery (3-Phase Briefing)</strong>
                      {" "}→ We apply 3-Phase Briefing Methodology to understand your
                      strategic intent, not just event logistics.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand font-bold flex-shrink-0">2.</span>
                    <span>
                      <strong className="text-ink">Design (5-Pillar Design)</strong>
                      {" "}→ Event structure follows 5-Pillar Corporate Outing Design:
                      Strategic Alignment → Cohesion Architecture → Measurement →
                      Operations → Post-Event Momentum.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand font-bold flex-shrink-0">3.</span>
                    <span>
                      <strong className="text-ink">Budget (BOTS Tier System)</strong>
                      {" "}→ We position you transparently across 4 tiers (Foundation →
                      Elevated → Signature → Bespoke), matching outcome expectation to
                      investment.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand font-bold flex-shrink-0">4.</span>
                    <span>
                      <strong className="text-ink">
                        Safety & Activity (Outbound Risk Tier)
                      </strong>
                      {" "}→ If outdoor activity, we categorize risk (Green → Yellow →
                      Red) and match insurance, medical, facilitation accordingly.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand font-bold flex-shrink-0">5.</span>
                    <span>
                      <strong className="text-ink">
                        Measurement (AG ROI Model)
                      </strong>
                      {" "}→ Post-event, we measure retention saving, productivity gain,
                      and culture impact. Tie event investment to financial outcome.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand font-bold flex-shrink-0">6.</span>
                    <span>
                      <strong className="text-ink">
                        Scale (Village Villa Architecture)
                      </strong>
                      {" "}→ For 50–300+ pax multi-villa events, VVA ensures intimate
                      bonding experience at scale without logistics chaos.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Authority & Citation */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="max-w-3xl">
              <span className="eyebrow-brand">Use These Frameworks</span>
              <h2 className="font-display text-3xl text-ink leading-tight mt-3 mb-8">
                Frameworks for HR Teams & Consultants
              </h2>

              <div className="prose prose-lg max-w-none text-slate space-y-6">
                <p>
                  These frameworks are open for citation and reference. If you are a HR
                  team, executive consultant, or corporate event organizer — you are
                  welcome to reference, cite, or build upon these frameworks.
                </p>

                <p>
                  <strong className="text-ink">For academic or press citation:</strong>
                  {" "}
                  Please cite as{" "}
                  <code className="bg-bone px-2 py-1 rounded">
                    Tour Bandung Corporate, {new Date().getFullYear()}
                  </code>{" "}
                  with link to this page.
                </p>

                <p>
                  <strong className="text-ink">For internal HR use:</strong> Feel free
                  to adapt these frameworks for your corporate event planning, vendor
                  evaluation, or ROI justification to finance team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-bone border-t border-divider">
          <div className="container-1280 text-center">
            <h2 className="font-display text-3xl text-ink mb-6">
              Ready to apply these frameworks to your event?
            </h2>
            <p className="text-lg text-slate mb-8 max-w-2xl mx-auto">
              Brief us using these frameworks as a guide. We will apply them systematically
              to deliver event that drive measurable business outcome.
            </p>
            <Link
              href="/proposal/request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-paper rounded-lg hover:bg-brand-deep transition"
            >
              Request Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

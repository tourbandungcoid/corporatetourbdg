import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { TEAM } from "@/lib/team-data";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Senior Planner Team — 6 Specialist Corporate Event Bandung",
  description:
    "Senior planner team 7Summits Travel — 6 specialist dengan total 50+ tahun pengalaman corporate event di Bandung & Jawa Barat. Real people, real credentials, real accountability.",
  alternates: { canonical: `${SITE.url}/team` },
  openGraph: {
    title: "Senior Planner Team TourBandung Corporate",
    description:
      "Senior planner team dengan 50+ tahun gabungan pengalaman corporate event Bandung.",
    url: `${SITE.url}/team`,
    type: "website",
    images: [{ url: IMAGES.groupShot1.src, width: 1200, height: 630, alt: IMAGES.groupShot1.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Planner Team — 6 Specialist Corporate Event Bandung",
    description: "6 senior planner TourBandung. 50+ tahun gabungan pengalaman corporate event Bandung & Jawa Barat.",
    images: [IMAGES.groupShot1.src],
  },
};

export default function TeamPage() {
  const totalYears = TEAM.reduce((sum, m) => sum + m.yearsExperience, 0);

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Team", url: `${SITE.url}/team` },
    ]),
    ...TEAM.map((m) =>
      personSchema({
        name: m.name,
        jobTitle: m.jobTitle,
        description: m.bioLong,
        slug: `/team#${m.slug}`,
        knowsAbout: m.specialties,
        hasCredential: m.credentials,
      })
    )
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Team"
          title="Real planner. Real credential. Real accountability."
          description={`6 specialist senior dengan total ${totalYears}+ tahun pengalaman corporate event di Jawa Barat. Bukan freelance pool — full-time team yang ikut sampai post-event closure.`}
        />

        {/* Stat strip */}
        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">{TEAM.length}</strong> senior planner</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline"><strong className="text-ink tabular">{totalYears}+</strong> tahun gabungan</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">400+ events delivered</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Why this matters */}
        <section className="py-16 md:py-20 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-10 lg:grid-cols-3 items-start">
              <div className="lg:col-span-1">
                <span className="eyebrow-brand">Kenapa team ini matter</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                  Vendor lain rotasi freelance. Kita full-time.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Banyak EO corporate sebenarnya 1–2 founder + freelance pool yang rotasi tergantung event. Hasilnya: setiap event briefing ulang dari nol, dan kalau ada masalah di lapangan — tidak ada single point of accountability.
                </p>
                <p>
                  Di 7Summits, 6 nama di bawah ini adalah <strong className="text-ink">full-time team</strong>. Mereka yang briefing, design, eksekusi, dan close-out. HR client tahu persis siapa kontak person di setiap fase. Field commander Tio sudah pegang 200+ event sendiri — bukan freelance yang baru kenal venue minggu lalu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="space-y-6">
              {TEAM.map((m) => (
                <article
                  key={m.slug}
                  id={m.slug}
                  className="scroll-mt-32 rounded-3xl border border-border bg-paper p-7 md:p-10 transition-colors hover:border-ink-soft"
                >
                  <div className="grid gap-8 md:grid-cols-[auto_1fr] items-start">
                    {/* Initials avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-brand to-forest text-paper flex items-center justify-center font-display text-3xl md:text-4xl">
                        {m.initials}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="eyebrow-brand">{m.shortRole}</p>
                          <h2 className="font-display mt-2 text-2xl md:text-3xl text-ink leading-tight">
                            {m.name}
                          </h2>
                          <p className="mt-1 text-sm text-slate">{m.jobTitle}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-border bg-cream/60 px-3 py-1 text-xs font-medium text-slate tabular">
                          {m.yearsExperience} tahun pengalaman
                        </span>
                      </div>

                      <p className="text-base md:text-lg text-slate leading-relaxed">
                        {m.bioLong}
                      </p>

                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-2">
                            Specialties
                          </p>
                          <ul className="space-y-1.5 text-sm text-slate">
                            {m.specialties.map((s, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-brand flex-shrink-0" />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-2">
                            Credentials
                          </p>
                          <ul className="space-y-1.5 text-sm text-slate">
                            {m.credentials.map((c, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-warm flex-shrink-0" />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-5 border-t border-divider/60 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs text-slate-mute">
                          Pegang pilar: <span className="text-ink font-medium">{m.signaturePillar}</span>
                        </p>
                        <Link
                          href="/methodology"
                          className="text-xs font-medium text-brand-deep hover:text-brand inline-flex items-center gap-1"
                        >
                          5-Pillar Design™ <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Mau briefing langsung dengan senior planner?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Free 15-menit discovery call. Lo bicara langsung dengan Sinta (Head of Strategy) atau Andre (Founder) — bukan junior screener.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Proposal <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("briefing call team")}
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
          message="Briefing langsung dengan senior planner — free 15 menit, no template."
          context="team"
        />
      </main>
    </>
  );
}

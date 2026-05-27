import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/icons/Icons";
import { TEAM } from "@/lib/team-data";
import { SITE, buildWaLink } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  personSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return TEAM.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);

  if (!member) {
    return { title: "Not Found" };
  }

  const url = `${SITE.url}/team/${slug}`;

  return {
    title: `${member.name} — ${member.jobTitle} | TourBandung Corporate`,
    description: `${member.name} is a ${member.jobTitle} at Tour Bandung Corporate with ${member.yearsExperience}+ years experience in corporate events. ${member.bioLong.substring(0, 120)}...`,
    alternates: { canonical: url },
    openGraph: {
      title: `${member.name} — ${member.jobTitle}`,
      description: member.bioLong.substring(0, 160),
      url,
      type: "profile",
    },
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const memberIndex = TEAM.findIndex((m) => m.slug === slug);
  const nextMember = TEAM[(memberIndex + 1) % TEAM.length];

  const schema = combineSchemas(
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Team", url: `${SITE.url}/team` },
      { name: member.name, url: `${SITE.url}/team/${slug}` },
    ]),
    personSchema({
      name: member.name,
      jobTitle: member.jobTitle,
      description: member.bioLong,
      slug: `/team/${slug}`,
    }),
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: `${member.name} — ${member.jobTitle}`,
      url: `${SITE.url}/team/${slug}`,
      about: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.jobTitle,
        workLocation: {
          "@type": "Place",
          name: "Bandung, Jawa Barat",
        },
        hasCredential: member.credentials.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c,
        })),
      },
      author: {
        "@type": "Organization",
        name: "7Summits Travel",
        url: SITE.url,
      },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="py-16 md:py-24 border-b border-divider">
          <div className="container-1280">
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep transition mb-8"
            >
              ← Back to team
            </Link>

            <div className="max-w-3xl">
              <div className="mb-6">
                <p className="eyebrow-brand">Team Member</p>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-4">
                {member.name}
              </h1>

              <p className="text-xl md:text-2xl text-brand-deep font-medium mb-8">
                {member.jobTitle}
              </p>

              <p className="text-base md:text-lg text-slate leading-relaxed mb-8 max-w-2xl">
                {member.bioLong}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={buildWaLink(`Konsultasi dengan ${member.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Chat dengan {member.name.split(" ")[0]}
                  <ArrowRight size={14} />
                </a>
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-paper px-6 h-12 text-sm font-medium text-ink hover:bg-cream transition"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-16 md:py-20 border-b border-divider bg-cream/30">
          <div className="container-1280">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <p className="eyebrow text-slate-mute mb-3">Experience</p>
                <p className="font-display text-3xl md:text-4xl text-ink">
                  {member.yearsExperience}+
                </p>
                <p className="text-sm text-slate mt-2">years in corporate events</p>
              </div>

              <div className="md:col-span-3">
                <p className="eyebrow text-slate-mute mb-3">Signature Specialization</p>
                <p className="font-display text-xl md:text-2xl text-ink mb-2">
                  {member.signaturePillar}
                </p>
                <p className="text-sm text-slate">
                  This is the core methodology pillar {member.name} leads in our 5-Pillar Corporate Outing Design framework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-16 md:py-20 border-b border-divider">
          <div className="container-1280">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
                Areas of Expertise
              </h2>

              <div className="space-y-3">
                {member.specialties.map((specialty, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-divider hover:bg-cream/30 transition"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-paper font-medium text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-base text-slate">{specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 md:py-20 border-b border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
                Credentials & Certifications
              </h2>

              <div className="space-y-3">
                {member.credentials.map((credential, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-base text-slate leading-relaxed"
                  >
                    <span className="text-brand-deep font-bold mt-1">✓</span>
                    <span>{credential}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-mute mt-8">
                All credentials verified and current as of 2026. {member.name}&apos;s professional development is ongoing — we invest in annual training for all senior staff.
              </p>
            </div>
          </div>
        </section>

        {/* Next Team Member */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <p className="eyebrow text-slate-mute mb-6">Other team members</p>
            <Link
              href={`/team/${nextMember.slug}`}
              className="group block p-8 rounded-3xl border border-border bg-paper hover:border-brand-deep transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl md:text-3xl text-ink mb-2">
                    {nextMember.name}
                  </p>
                  <p className="text-brand-deep font-medium mb-3">
                    {nextMember.jobTitle}
                  </p>
                  <p className="text-slate text-sm">
                    {nextMember.yearsExperience}+ years experience • {nextMember.specialties[0]}
                  </p>
                </div>
                <ArrowRight size={24} className="text-brand-deep group-hover:translate-x-1 transition shrink-0 mt-2" />
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow-brand mb-4">Ready to chat?</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Discuss your corporate event with {member.name.split(" ")[0]}.
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              {member.name} is available for discovery briefing call — no sales pitch, just honest conversation about what you need and how we can help.
            </p>
            <a
              href={buildWaLink(`Ingin konsultasi dengan ${member.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition"
            >
              Start conversation on WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

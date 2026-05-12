import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons/Icons";
import { IMAGES } from "@/lib/drive-images";

const CASE_STUDIES = [
  {
    slug: "post-merger-bonding-800-pax",
    industry: "Tech Unicorn",
    headline:
      "Post-merger bonding untuk 800 tim baru — satu suara dalam 3 hari.",
    pax: "800 pax",
    duration: "3D2N",
    location: "Lembang",
    image: IMAGES.caseStudyLarge,
  },
  {
    slug: "annual-gathering-banking-3depts",
    industry: "Banking · BUMN",
    headline:
      "Annual gathering 3 departemen — 92% tim vote 'best event' dalam 5 tahun.",
    pax: "120 pax",
    duration: "2D1N",
    location: "Ciwidey",
    image: IMAGES.caseStudyTeamBuilding,
  },
  {
    slug: "quarterly-strategy-offsite-clevel",
    industry: "FMCG · C-Level",
    headline:
      "Quarterly strategy offsite — 24 senior leader, 12 new initiatives lahir.",
    pax: "24 pax",
    duration: "1D Workshop",
    location: "Bandung City",
    image: IMAGES.caseStudyExecutive,
  },
];

export function CaseStudies() {
  return (
    <section className="section bg-paper">
      <div className="container-1280">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow-brand">Case studies</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              Real events.<br />
              <span className="text-brand-deep">Real outcomes.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="self-start md:self-end inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 h-11 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            All case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-paper flex flex-col border border-border hover:border-ink-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,31,26,0.08)]"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                <Image
                  src={cs.image.src}
                  alt={cs.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-paper/90 backdrop-blur px-3 py-1 text-xs font-medium text-ink">
                    {cs.industry}
                  </span>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-xl text-ink leading-snug">
                  &ldquo;{cs.headline}&rdquo;
                </h3>

                <div className="mt-5 pt-5 border-t border-divider flex items-center gap-4 text-xs text-slate">
                  <span className="tabular">{cs.pax}</span>
                  <span className="h-1 w-1 rounded-full bg-divider" />
                  <span>{cs.duration}</span>
                  <span className="h-1 w-1 rounded-full bg-divider" />
                  <span>{cs.location}</span>
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink/85">
                  Read full story
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

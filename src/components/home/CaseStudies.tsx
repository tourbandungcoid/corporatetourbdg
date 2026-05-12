import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons/Icons";
import { IMAGES } from "@/lib/drive-images";

const CASE_STUDIES = [
  {
    slug: "post-merger-bonding-800-pax",
    industry: "TECH UNICORN",
    headline:
      "Post-Merger Bonding untuk 800 Tim Baru — Satu Suara dalam 3 Hari",
    pax: "800 pax",
    duration: "3D2N",
    location: "Lembang",
    image: IMAGES.caseStudyLarge,
  },
  {
    slug: "annual-gathering-banking-3depts",
    industry: "BANKING · BUMN",
    headline:
      "Annual Gathering 3 Departemen — 92% Tim Vote 'Best Event' Dalam 5 Tahun",
    pax: "120 pax",
    duration: "2D1N",
    location: "Ciwidey",
    image: IMAGES.caseStudyTeamBuilding,
  },
  {
    slug: "quarterly-strategy-offsite-clevel",
    industry: "FMCG · C-LEVEL",
    headline:
      "Quarterly Strategy Offsite — 24 Senior Leader, 12 New Initiatives Lahir",
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
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow-brand">Case Studies</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
              Beberapa Cerita Outing yang Kita Bangga
            </h2>
            <p className="mt-6 text-lg text-slate">
              Real events untuk real companies — outcome yang konkret, bukan
              testimonial template.
            </p>
          </div>
          <Link href="/case-studies" className="link-underline">
            Lihat all case studies
            <ArrowRight size={14} className="arrow" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="card card-hover group overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                <Image
                  src={cs.image.src}
                  alt={cs.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="eyebrow text-brand-deep">{cs.industry}</p>
                <h3 className="font-display mt-4 text-xl text-ink leading-tight">
                  &ldquo;{cs.headline}&rdquo;
                </h3>
                <ul className="mt-5 space-y-1.5 text-sm">
                  <li className="flex items-center gap-2 text-slate">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {cs.pax}
                  </li>
                  <li className="flex items-center gap-2 text-slate">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {cs.duration}
                  </li>
                  <li className="flex items-center gap-2 text-slate">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {cs.location}
                  </li>
                </ul>
                <span className="mt-6 pt-5 border-t border-divider text-sm font-medium text-brand-deep inline-flex items-center gap-1">
                  Read full story
                  <ArrowRight
                    size={14}
                    className="arrow group-hover:translate-x-1 transition"
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

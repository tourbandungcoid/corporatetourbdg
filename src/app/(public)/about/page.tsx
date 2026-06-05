import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Check } from "@/components/icons/Icons";
import { SITE, STATS } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import { TEAM } from "@/lib/team-data";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  reviewSchema,
  personSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tentang TourBandung Corporate — B2B Corporate Event Specialist Bandung Sejak 2018",
  description:
    "TourBandung Corporate adalah unit B2B corporate event specialist dari 7Summits Travel. 400+ events delivered di Bandung & Jawa Barat sejak 2018 — outing kantor, team building, executive offsite, MICE. Senior-led, NDA-ready, pricing transparent.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "Tentang TourBandung Corporate — B2B Specialist Sejak 2018",
    description:
      "400+ corporate events delivered sejak 2018. Unit B2B dari 7Summits Travel — fokus outing, team building & executive offsite di Bandung & Jawa Barat.",
    url: `${SITE.url}/about`,
    type: "website",
  },
};

const PRINCIPLES = [
  {
    title: "Structured experience design.",
    body: "Setiap brief di-translate ke business outcome dulu, baru design programnya. Bonding pasca-merger berbeda dengan annual celebration — kami treat differently.",
  },
  {
    title: "Senior team, dedicated PM.",
    body: "Tidak ada rotating freelancer. Project manager dedicated dari briefing sampai post-event. Avg tenure tim senior: 4+ tahun di Tour Bandung Corporate.",
  },
  {
    title: "Direct vendor relationships.",
    body: "60+ venue partnership langsung di Bandung & Jawa Barat — villa private, resort premium, glamping site. Bukan calo, bukan reseller. Akses langsung = harga & fleksibilitas lebih baik.",
  },
  {
    title: "Pricing transparency.",
    body: "Detailed breakdown di proposal — venue, F&B, logistics, talent, contingency, margin. No hidden cost dalam 6 tahun terakhir. Finance team Anda akan love this.",
  },
];

export default function AboutPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "About", url: `${SITE.url}/about` },
    ]),
    reviewSchema({
      reviewRating: 5,
      reviewBody: "Yang gw appreciate: senior planner dedicated dari briefing sampai event. Bukan rotating freelancer. Komunikasi clean, accountability ada nama.",
      reviewerName: "Andini Pratama",
      reviewerJobTitle: "HR Manager · Tech Unicorn",
    }),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      url: `${SITE.url}/about`,
      inLanguage: "id-ID",
      about: { "@type": "Organization", name: "7Summits Travel" },
    },
    ...TEAM.map((m) =>
      personSchema({
        name: m.name,
        jobTitle: m.jobTitle,
        description: m.bioLong,
        slug: `/team/${m.slug}`,
        sameAs: m.linkedinUrl ? [m.linkedinUrl] : undefined,
      })
    )
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="About"
        title="Specialist corporate event design — sejak 2018."
        description="corporate.tourbandung.co.id adalah unit specialized dari 7Summits Travel yang fokus 100% di market corporate (B2B). 400+ events delivered, 60+ venue partnership, tim senior dengan tenure 4+ tahun. Kami specialist — bukan generalist travel agent yang mencoba handle corporate."
      />

      {/* Stats strip */}
      <section className="bg-paper py-16 border-y border-divider">
        <div className="container-1280">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number={STATS.eventsDelivered} label="Events delivered" />
            <Stat number={STATS.companiesTrusted} label="Companies trusted" />
            <Stat number={STATS.venuePartners} label="Venue partnership" />
            <Stat number={STATS.repeatBookingRate} label="Repeat booking rate" />
          </div>
        </div>
      </section>

      {/* Canonical Entity Definition */}
      <section className="py-20 md:py-28 bg-brand-light/5">
        <div className="container-1280">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-brand/20 bg-paper p-8 md:p-12">
              <p className="eyebrow-brand mb-4">Siapa Kami</p>
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-6 leading-tight">
                Tour Bandung Corporate — Specialist B2B Corporate Event Organizer Sejak 2018
              </h3>
              <div className="space-y-4 text-base text-slate leading-relaxed">
                <p>
                  <strong>Tour Bandung Corporate</strong> adalah unit specialized dari 7Summits Travel yang fokus 100% pada <strong>B2B corporate event organizer</strong> untuk outing kantor, team building, corporate gathering, incentive trip, leadership retreat, dan executive offsite di Bandung & Jawa Barat.
                </p>
                <p>
                  <strong>Operating since 2018</strong> dengan track record <strong>400+ corporate events delivered</strong>, <strong>92% repeat booking rate</strong>, dan <strong>60+ venue direct partnership</strong> di Bandung & Jawa Barat. Tim kami senior (rata-rata tenure 4+ tahun) dan setiap project dapat dedicated PM dari briefing sampai post-event — bukan rotating freelancer atau generic EO.
                </p>
                <p>
                  <strong>Specialization kami: B2B corporate events saja</strong> — bukan wedding, bukan family travel, bukan retail tourism. Ini berarti kami deep di understanding corporate dynamics, budgeting, ROI measurement, dan leadership alignment — hal-hal yang tidak tercover travel agent biasa.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-divider grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs font-medium text-slate-mute uppercase tracking-wide mb-2">Founded</p>
                  <p className="font-semibold text-ink">2018</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-mute uppercase tracking-wide mb-2">Primary Market</p>
                  <p className="font-semibold text-ink">Bandung & Jawa Barat</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-mute uppercase tracking-wide mb-2">Google Rating</p>
                  <p className="font-semibold text-ink">⭐ 4.9/5 (200+ reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story narrative */}
      <section className="py-20 md:py-28">
        <div className="container-1280">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow-brand">Our story</span>
              <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
                Dari travel agent ke specialist corporate partner.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-base md:text-lg text-slate leading-relaxed">
              <p>
                7Summits Travel started sebagai travel agency umum di 2014.
                Lima tahun pertama, kami handle leisure, family trips, dan
                small corporate jobs.
              </p>
              <p>
                Di 2018, kami notice pattern: corporate clients butuh approach
                berbeda — strategic outcome, structured methodology, dedicated
                accountability. Tidak bisa di-handle dengan generic travel
                agent mindset. Kami pisahkan corporate unit jadi entitas
                fokus — that&apos;s how corporate.tourbandung.co.id was born.
              </p>
              <p>
                Sekarang: 400+ events delivered, 100+ companies trusted,
                portfolio dari startup unicorn sampai BUMN nasional. 92%
                repeat booking — angka yang kami paling bangga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work — principles */}
      <section className="py-20 md:py-28 bg-cream/40">
        <div className="container-1280">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow-brand">How we work</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              4 prinsip yang konsisten kami pegang.
            </h2>
          </div>

          <div className="grid gap-px bg-divider rounded-3xl overflow-hidden border border-divider">
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="bg-paper p-8 md:p-12 grid gap-6 md:grid-cols-12 items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-5xl md:text-6xl text-brand-deep tabular leading-none">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-slate leading-relaxed max-w-3xl">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-slate">
              Ingin tahu lebih detail tentang methodology & frameworks kami?
            </p>
            <Link href="/methodology" className="link-underline text-sm mt-2 inline-block">
              Lihat 6 frameworks kami
              <ArrowRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual moment */}
      <section className="py-20 md:py-28">
        <div className="container-1280">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-ink">
                <Image
                  src={IMAGES.caseStudyLarge.src}
                  alt="Corporate gathering moment yang kami handle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <span className="eyebrow-brand">What clients say</span>
              <blockquote className="font-display mt-4 text-2xl md:text-3xl lg:text-4xl text-ink leading-[1.15]">
                &ldquo;Yang gw appreciate: senior planner dedicated dari
                briefing sampai event. Bukan rotating freelancer.
                Komunikasi clean, accountability ada nama.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-base">
                  AP
                </div>
                <div>
                  <p className="font-medium text-ink">Andini Pratama</p>
                  <p className="text-sm text-slate">
                    HR Manager · Tech Unicorn
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Tim senior dengan tenure 4+ tahun",
                  "60+ venue partnership langsung",
                  "0% hidden fees track record",
                  "Avg response time 6 jam",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate"
                  >
                    <span className="mt-0.5 text-brand">
                      <Check size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
            Mau kerja bareng kami?
          </h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
            Mulai dengan briefing call 15 menit. Senior planner langsung.
            Free, no commitment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposal/request"
              className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-7 h-12 text-sm font-medium hover:bg-brand hover:text-paper transition-colors"
            >
              Request Proposal
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/proposal/book-consultation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper/15 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <p className="font-display text-3xl md:text-4xl lg:text-5xl text-ink tabular leading-none">
        {number}
      </p>
      <p className="mt-2 text-sm text-slate">{label}</p>
    </div>
  );
}

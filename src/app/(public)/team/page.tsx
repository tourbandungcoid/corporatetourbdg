import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { ArrowRight, Whatsapp, Sparkle } from "@/components/icons/Icons";
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
  articleSchema,
  howToSchema,
  faqPageSchema,
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
    articleSchema({
      headline: "Senior Planner Team — 6 Specialist Corporate Event Bandung",
      alternativeHeadline: "Tim Event Organizer Corporate Bandung: 6 Senior Planner Full-Time 7Summits Travel",
      description: "Senior planner team 7Summits Travel — 6 specialist dengan total 50+ tahun pengalaman corporate event di Bandung & Jawa Barat. Real people, real credentials, real accountability.",
      image: IMAGES.groupShot1.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/team",
      aboutService: "Senior Corporate Event Planner Team Bandung",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "senior planner corporate event bandung",
        "tim event organizer corporate bandung",
        "profil planner outing kantor jawa barat",
        "dedicated project manager corporate event",
        "pengalaman vendor corporate event bandung 2018",
        "team building specialist bandung bersertifikat",
      ],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "Person", name: "Andre Pratama", id: `${SITE.url}/team#andre-pratama`, url: `${SITE.url}/team#andre-pratama` },
        { type: "Person", name: "Sinta Rahmadhani", id: `${SITE.url}/team#sinta-rahmadhani`, url: `${SITE.url}/team#sinta-rahmadhani` },
        { type: "Person", name: "Raden Bagus Wicaksono", id: `${SITE.url}/team#raden-bagus`, url: `${SITE.url}/team#raden-bagus` },
        { type: "Person", name: "Amelia Chandra", id: `${SITE.url}/team#amelia-chandra`, url: `${SITE.url}/team#amelia-chandra` },
        { type: "Person", name: "Tio Mahesa", id: `${SITE.url}/team#tio-mahesa`, url: `${SITE.url}/team#tio-mahesa` },
        { type: "Person", name: "Putri Anggraeni", id: `${SITE.url}/team#putri-anggraeni`, url: `${SITE.url}/team#putri-anggraeni` },
        { type: "WebPage", name: "Metodologi — 3 Named Framework", url: `${SITE.url}/methodology` },
      ],
    }),
    ...TEAM.map((m) =>
      personSchema({
        name: m.name,
        jobTitle: m.jobTitle,
        description: m.bioLong,
        slug: `/team#${m.slug}`,
        knowsAbout: m.specialties,
        hasCredential: m.credentials,
      })
    ),
    howToSchema({
      pageUrl: `${SITE.url}/team`,
      name: "Cara Memilih Senior Planner Corporate Event yang Tepat",
      description: "4 langkah mencocokkan kebutuhan corporate event Anda dengan spesialisasi planner yang tepat untuk hasil optimal.",
      steps: [
        { name: "Definisikan Objective Event", text: "Identifikasi prioritas utama: bonding informal (→ Amelia atau Sinta), strategic alignment atau leadership (→ Andre), safety-heavy outdoor (→ Raden Bagus), atau operasional lapangan skala besar (→ Tio). Objective yang jelas menentukan komposisi tim yang paling relevan." },
        { name: "Match Spesialisasi dengan Kebutuhan Spesifik", text: "Sinta Rahmadhani: discovery brief dan behavior change facilitation, ex-Deloitte HC. Amelia Chandra: program flow design dan experience architecture. Raden Bagus: risk management dan outdoor safety. Tio Mahesa: field execution 200+ events. Putri Anggraeni: post-event reporting dan ROI measurement." },
        { name: "Verifikasi Pengalaman di Industri atau Skala yang Relevan", text: "Tanyakan pengalaman spesifik: 'Sudah pernah handle gathering untuk industri perbankan sebelumnya?', 'Bagaimana cara Anda handle 300+ pax outdoor event saat hujan?' Jawaban konkret dengan detail teknis adalah sinyal pengalaman nyata." },
        { name: "Lakukan Briefing Call Langsung", text: "Minta briefing call 15–30 menit dengan planner yang akan jadi PM proyek Anda — bukan sales rep. Respons terhadap pertanyaan Anda, kemampuan menangkap nuance brief, dan proaktivitas dalam mengidentifikasi risiko adalah indikator kualitas pelayanan sesungguhnya." },
      ],
    }),
    faqPageSchema([
      { question: "Apakah semua planner TourBandung Corporate full-time atau freelance?", answer: "Semua 6 senior planner TourBandung Corporate adalah full-time — bukan freelancer yang di-hire per project. Rata-rata tenure tim: 4+ tahun. Ini yang membedakan kami dari kebanyakan EO yang bergantung pada pool freelancer yang berubah-ubah setiap event." },
      { question: "Siapa yang akan jadi project manager untuk event saya?", answer: "PM dedicated akan ditunjuk saat onboarding proyek — biasanya planner yang spesialisasinya paling relevan dengan objective event Anda. Nama PM tertera di PKS (kontrak). PM yang sama dari briefing hingga post-event closure — tidak ada handover." },
      { question: "Berapa total pengalaman kombinasi tim TourBandung Corporate?", answer: "50+ tahun pengalaman gabungan: Andre (12 tahun), Raden Bagus (11 tahun), Sinta (9 tahun), Tio (8 tahun), Amelia (7 tahun), Putri (5 tahun). Selain pengalaman di TourBandung Corporate, beberapa senior planner membawa pengalaman dari background sebelumnya (hotel bintang 5, big-4 consulting, outdoor education)." },
      { question: "Apakah tim TourBandung Corporate punya sertifikasi profesional?", answer: "Ya — beberapa sertifikasi yang dimiliki tim: ASITA certified (Andre), K3 Safety + Wilderness First Aid (Raden Bagus), MBTI Step II Facilitator (Sinta), Certified MICE Professional Kemenparekraf (Amelia), Google Analytics (Putri). Detail kredensial setiap planner ada di halaman team." },
    ], `${SITE.url}/team`)
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
        <section className="py-8 border-b border-divider bg-cream/30">
          <div className="container-1280">
            <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                TourBandung Corporate memiliki <strong>6 senior planner full-time</strong> — Andre Pratama (12 tahun, Founder), Sinta Rahmadhani (ex-Deloitte HC, 9 tahun), Raden Bagus Wicaksono (K3 certified, 11 tahun), Amelia Chandra (7 tahun), Tio Mahesa (8 tahun), dan Putri Anggraeni (5 tahun). <strong>52 combined years experience.</strong> Dedicated PM per proyek — tidak ada rotating freelancer.
              </p>
            </div>
          </div>
        </section>

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

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";

const description = "Pilih cara lo dapat custom corporate event proposal — full request, quick quote, atau briefing call. Free, dalam 24 jam.";

export const metadata: Metadata = {
  title: "Request Proposal Corporate Event Bandung — Gratis, 24 Jam | TourBandung Corporate",
  description,
  alternates: { canonical: `${SITE.url}/proposal` },
  openGraph: {
    title: "Request Proposal Corporate Event Bandung — Gratis, 24 Jam",
    description,
    url: `${SITE.url}/proposal`,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Proposal Corporate Event Bandung — Gratis, 24 Jam",
    description: "Full request, quick quote, atau briefing call. Custom proposal gratis dalam 24 jam.",
    images: [IMAGES.heroMain.src],
  },
};

const PATHS = [
  {
    href: "/proposal/request",
    badge: "Full request",
    title: "Request Proposal",
    description:
      "Tim lo udah ready, butuh proposal lengkap. Free, dalam 24 jam setelah briefing call.",
    fields: "10 fields",
    time: "5 menit",
    response: "<24 jam",
    primary: true,
  },
  {
    href: "/proposal/quick-quote",
    badge: "Quick estimate",
    title: "Quick Quote",
    description:
      "Masih research, butuh ballpark dulu. Estimate kasar sampai email lo dalam 2 jam.",
    fields: "4 fields",
    time: "1 menit",
    response: "<2 jam",
    primary: false,
  },
  {
    href: "/proposal/book-consultation",
    badge: "Briefing call",
    title: "Free Consultation",
    description:
      "Butuh ngobrol dulu 15 menit. Pick slot, kami siapin planner senior.",
    fields: "Pick a slot",
    time: "15 menit",
    response: "Live call",
    primary: false,
  },
];

export default function ProposalEntrancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Get a proposal"
        title="3 cara mulai. Pick yang paling fit untuk lo."
        description="Free, no commitment, no pushy sales. Senior planner kami respond avg 6 jam dalam working hours."
      />

      <section className="pb-24">
        <div className="container-1280">
          <div className="grid gap-6 lg:grid-cols-3">
            {PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className={[
                  "group rounded-3xl border p-8 flex flex-col transition-all",
                  path.primary
                    ? "border-ink bg-ink text-paper hover:bg-brand-deep"
                    : "border-border bg-paper text-ink hover:border-ink-soft hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,26,0.08)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium",
                    path.primary
                      ? "bg-paper/15 text-paper"
                      : "bg-brand-light/70 text-brand-deep",
                  ].join(" ")}
                >
                  {path.badge}
                </span>

                <h2 className="font-display mt-6 text-2xl md:text-3xl leading-tight">
                  {path.title}
                </h2>

                <p
                  className={[
                    "mt-3 text-sm leading-relaxed flex-1",
                    path.primary ? "text-paper/75" : "text-slate",
                  ].join(" ")}
                >
                  {path.description}
                </p>

                <ul
                  className={[
                    "mt-6 pt-5 border-t space-y-2 text-sm",
                    path.primary
                      ? "border-paper/15 text-paper/80"
                      : "border-divider text-slate",
                  ].join(" ")}
                >
                  <li className="flex justify-between">
                    <span>Form</span>
                    <span className="font-medium">{path.fields}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Time to fill</span>
                    <span className="font-medium">{path.time}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Our response</span>
                    <span className="font-medium">{path.response}</span>
                  </li>
                </ul>

                <span
                  className={[
                    "mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
                    path.primary ? "text-paper" : "text-ink",
                  ].join(" ")}
                >
                  Start
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* WA escape hatch */}
          <div className="mt-12 text-center">
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 text-sm"
            >
              <Whatsapp size={14} />
              Atau langsung chat WhatsApp aja
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

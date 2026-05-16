import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { CONTACT, SITE, buildWaLink } from "@/lib/site";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hubungi TourBandung Corporate — Konsultasi & Brief Corporate Event Bandung",
  description: `Hubungi ${SITE.name} untuk konsultasi corporate event Bandung — brief gratis 15 menit, proposal dalam 24 jam. WhatsApp, email, atau kunjungi kantor kami di Jl. Babakan Priangan I No.11C, Bandung 40255. Response avg 6 jam.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Hubungi TourBandung Corporate — Brief & Konsultasi Corporate Event",
    description:
      "WhatsApp +62 811-2277-954 · hello@corporate.tourbandung.co.id · Jl. Babakan Priangan I No.11C, Bandung 40255 · Senin–Jumat 08:00–17:00 WIB. Proposal dalam 24 jam.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Contact", url: `${SITE.url}/contact` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      url: `${SITE.url}/contact`,
      name: "Hubungi TourBandung Corporate",
      inLanguage: "id-ID",
      about: { "@type": "Organization", name: SITE.legalName },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="Contact"
        title="Mulai dari briefing call 15 menit."
        description="Tim senior planner kami respond cepat — avg 6 jam dalam working hours. WhatsApp atau email, kedua-duanya works."
      />

      <section className="pb-24">
        <div className="container-1280">
          <div className="grid gap-8 lg:grid-cols-12 mb-12">
            {/* Contact info column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-border bg-paper p-7 md:p-8">
                <p className="eyebrow-brand mb-5">Get in touch</p>

                <div className="space-y-5">
                  <Item label="WhatsApp / Phone">
                    <a
                      href={buildWaLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-deep hover:underline font-medium"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </Item>

                  <Item label="Email">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-brand-deep hover:underline font-medium"
                    >
                      {CONTACT.email}
                    </a>
                  </Item>

                  <Item label="Address">
                    <span className="text-ink">
                      {CONTACT.address.street}
                      <br />
                      {CONTACT.address.sublocality}, {CONTACT.address.locality}
                      <br />
                      {CONTACT.address.city}, {CONTACT.address.region}{" "}
                      {CONTACT.address.postalCode}
                    </span>
                  </Item>

                  <Item label="Office hours">
                    <span className="text-ink">{CONTACT.officeHours}</span>
                  </Item>
                </div>

                <div className="mt-7 pt-6 border-t border-divider flex flex-wrap gap-2">
                  <a
                    href={buildWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 h-11 text-sm font-medium hover:opacity-90 transition"
                  >
                    <Whatsapp size={14} />
                    WhatsApp
                  </a>
                  <Link
                    href="/proposal/request"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                  >
                    Request Proposal
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <GoogleReviewsBadge variant="expanded" />
            </div>

            {/* Map column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border overflow-hidden bg-paper h-full min-h-[500px]">
                <iframe
                  src="https://maps.google.com/maps?q=Jl.%20Babakan%20Priangan%20I%20No.11C%2C%20Ciseureuh%2C%20Kec.%20Regol%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040255&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 500 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TourBandung Corporate office location"
                />
              </div>

              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink hover:text-brand-deep"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Office hours grid */}
          <div className="rounded-3xl border border-border bg-bone p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="eyebrow text-slate mb-2">Working hours</p>
                <p className="font-display text-2xl text-ink leading-tight">
                  Senin–Jumat
                </p>
                <p className="text-base text-slate mt-1">08.00 – 17.00 WIB</p>
              </div>

              <div>
                <p className="eyebrow text-slate mb-2">Response time</p>
                <p className="font-display text-2xl text-ink leading-tight">
                  &lt; 6 jam
                </p>
                <p className="text-base text-slate mt-1">
                  Average di working hours
                </p>
              </div>

              <div>
                <p className="eyebrow text-slate mb-2">Off-hours</p>
                <p className="font-display text-2xl text-ink leading-tight">
                  WhatsApp
                </p>
                <p className="text-base text-slate mt-1">
                  Respond next working day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em] text-slate-mute mb-1">
        {label}
      </p>
      <div className="text-sm md:text-base">{children}</div>
    </div>
  );
}

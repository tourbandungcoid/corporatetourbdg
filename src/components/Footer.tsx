import Link from "next/link";
import {
  SITE,
  SERVICES,
  INDUSTRIES,
  DESTINATIONS_CURRENT,
  DESTINATIONS_COMING,
} from "@/lib/site";

const COL_RESOURCES = [
  { label: "Guides", href: "/resources" },
  { label: "Playbook", href: "/resources/playbook" },
  { label: "Budget Calculator", href: "/resources/templates/budget-calculator" },
  { label: "Industry Reports", href: "/resources/reports" },
  { label: "Blog", href: "/resources/blog" },
];

const COL_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/why-us/our-process" },
  { label: "Safety Standards", href: "/why-us/safety-standards" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/about/careers" },
  { label: "Press & Media", href: "/about/press-media" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="container-1280 py-20 lg:py-28">
        {/* Top brand */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-[28px] text-[var(--color-gold)]">
                7S
              </span>
              <span className="font-sans font-medium text-[17px]">
                TourBandung Corporate
              </span>
            </div>
            <p className="font-display text-[28px] lg:text-[32px] leading-[1.15] text-[var(--color-bone)] max-w-[480px]">
              Indonesia&apos;s trusted partner for high-stakes corporate
              gatherings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/proposal/request" className="btn btn-on-dark">
                Request Proposal
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-[var(--color-bone)]"
              >
                Chat WhatsApp →
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterCol
              title="Services"
              links={SERVICES.slice(0, 6).map((s) => ({
                label: s.title,
                href: `/services/${s.slug}`,
              }))}
            />
            <FooterCol
              title="Industries"
              links={INDUSTRIES.slice(0, 6).map((i) => ({
                label: i.label,
                href: `/industries/${i.slug}`,
              }))}
            />
            <FooterCol title="Resources" links={COL_RESOURCES} />
          </div>
        </div>

        {/* Middle */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 py-12 border-b border-white/10">
          <div className="lg:col-span-5">
            <h3 className="eyebrow text-white/50 mb-4">Destinations</h3>
            <p className="text-[15px] leading-relaxed text-[var(--color-bone)]">
              {DESTINATIONS_CURRENT.join(" · ")}
            </p>
            <p className="text-[13px] text-white/40 mt-2">
              Coming soon: {DESTINATIONS_COMING.join(" · ")}
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            <FooterCol title="Company" links={COL_COMPANY} />
            <div>
              <h3 className="eyebrow text-white/50 mb-4">Contact</h3>
              <ul className="space-y-2 text-[14px] text-white/80">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-[var(--color-gold)]"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="hover:text-[var(--color-gold)]"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="text-white/60">
                  {SITE.address.street}, {SITE.address.city}{" "}
                  {SITE.address.postalCode}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="eyebrow text-white/50 mb-3">
              Member of · Certified by
            </h3>
            <p className="text-[14px] text-white/70">
              ASITA · IATA · ISO 9001:2015 · K3 Certified
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-[13px] text-white/50">
            <div className="flex gap-5">
              <Link href={SITE.social.linkedin} className="hover:text-white">
                LinkedIn
              </Link>
              <Link href={SITE.social.instagram} className="hover:text-white">
                Instagram
              </Link>
              <Link href={SITE.social.youtube} className="hover:text-white">
                YouTube
              </Link>
            </div>
            <div className="flex flex-wrap gap-5">
              <span>© {new Date().getFullYear()} {SITE.legalName}</span>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow text-white/50 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[14px] text-white/80 hover:text-[var(--color-gold)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

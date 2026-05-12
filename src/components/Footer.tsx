import Link from "next/link";
import { LogoLockup } from "./Logo";
import { CONTACT, SITE, SOCIAL, buildWaLink } from "@/lib/site";
import { Whatsapp } from "./icons/Icons";

const SERVICES = [
  { href: "/services/company-gathering", label: "Company Gathering" },
  { href: "/services/team-building", label: "Team Building" },
  { href: "/services/employee-gathering", label: "Employee Gathering" },
  { href: "/services/corporate-retreat", label: "Corporate Retreat" },
  { href: "/services/leadership-camp", label: "Leadership Camp" },
  { href: "/services/executive-offsite", label: "Executive Offsite" },
  { href: "/services/incentive-trip", label: "Incentive Trip" },
  { href: "/services/annual-company-trip", label: "Annual Trip" },
  { href: "/services/mice", label: "MICE" },
  { href: "/services/glamping-corporate", label: "Glamping Corporate" },
];

const RESOURCES = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/proposal/sample", label: "Sample Proposal" },
  { href: "/packages", label: "Featured Packages" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream no-print">
      <div className="container-1280 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <LogoLockup size={32} variant="white" showSubline />
            <p className="mt-6 text-sm text-[#FAFAF7]/70 max-w-xs leading-relaxed">
              Vendor specialist B2B corporate outing, team building, dan
              executive offsite di Bandung & Jawa Barat. Sejak 2018.
            </p>

            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              style={{ background: "#25D366", color: "#FFFFFF" }}
            >
              <Whatsapp size={16} />
              {CONTACT.whatsapp.replace(/^62/, "+62 ")}
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="eyebrow text-[#FAFAF7]/50 mb-5">Services</p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-cream/85 hover:text-brand transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <p className="eyebrow text-[#FAFAF7]/50 mb-5">Resources</p>
            <ul className="flex flex-col gap-2.5">
              {RESOURCES.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-cream/85 hover:text-brand transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <p className="eyebrow text-[#FAFAF7]/50 mb-5">Company</p>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-cream/85 hover:text-brand transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow text-[#FAFAF7]/50 mb-3 mt-8">Office</p>
            <p className="text-sm text-cream/85 leading-relaxed">
              {CONTACT.address}
              <br />
              {CONTACT.officeHours}
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-[#FAFAF7]/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/60">
          <p>
            © {new Date().getFullYear()} {SITE.name}. A unit of {SITE.parentBrand}.
          </p>
          <div className="flex gap-5">
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              Instagram
            </a>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

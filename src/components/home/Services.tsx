import Link from "next/link";
import {
  ArrowRight,
  IconGathering,
  IconTeamBuilding,
  IconEmployee,
  IconRetreat,
  IconLeadership,
  IconExecutive,
  IconIncentive,
  IconAnnual,
  IconMice,
  IconGlamping,
} from "@/components/icons/Icons";
import { getCopy } from "@/lib/brand-settings";

const SERVICES = [
  {
    slug: "company-gathering",
    title: "Company Gathering",
    description:
      "Annual gathering atau quarterly meetup untuk tim 50–800 pax.",
    Icon: IconGathering,
  },
  {
    slug: "team-building",
    title: "Team Building",
    description:
      "Outbound, indoor, atau workshop-based — di-design dari objective tim.",
    Icon: IconTeamBuilding,
  },
  {
    slug: "employee-gathering",
    title: "Employee Gathering",
    description:
      "Refreshing + team bonding di venue dengan vibe yang pas.",
    Icon: IconEmployee,
  },
  {
    slug: "corporate-retreat",
    title: "Corporate Retreat",
    description:
      "Multi-day retreat untuk deep work atau cultural reset.",
    Icon: IconRetreat,
  },
  {
    slug: "leadership-camp",
    title: "Leadership Camp",
    description:
      "Leadership development untuk middle-to-senior management.",
    Icon: IconLeadership,
  },
  {
    slug: "executive-offsite",
    title: "Executive Offsite",
    description:
      "C-level offsite di premium villa. Discreet, premium, focused.",
    Icon: IconExecutive,
  },
  {
    slug: "incentive-trip",
    title: "Incentive Trip",
    description:
      "Reward program untuk top performers — destination experience.",
    Icon: IconIncentive,
  },
  {
    slug: "annual-company-trip",
    title: "Annual Company Trip",
    description:
      "Big annual moment untuk seluruh perusahaan. Kami handle complexity.",
    Icon: IconAnnual,
  },
  {
    slug: "mice",
    title: "MICE",
    description:
      "Meeting, Incentive, Conference, Exhibition — full-stack production.",
    Icon: IconMice,
  },
  {
    slug: "glamping-corporate",
    title: "Glamping Corporate",
    description:
      "Unique outdoor experience tanpa kompromi kenyamanan.",
    Icon: IconGlamping,
  },
];

export async function Services() {
  const [eyebrow, headline, sub] = await Promise.all([
    getCopy("home.services.eyebrow", "What we do"),
    getCopy("home.services.headline", "10 program yang siap di-customize untuk tim lo."),
    getCopy("home.services.sub", "Dari intimate retreat sampai mass gathering 2.000 pax — semua di-design dari brief, bukan paket template."),
  ]);

  return (
    <section className="section bg-bone" id="services">
      <div className="container-1280">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow-brand">{eyebrow}</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink">
              {headline}
            </h2>
          </div>
          <p className="md:max-w-sm text-base text-slate">
            {sub}
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative rounded-2xl border border-border bg-paper p-6 flex flex-col transition-all hover:border-ink-soft hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,31,26,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light/70 text-brand-deep">
                <service.Icon size={20} />
              </div>
              <h3 className="font-display mt-6 text-lg text-ink leading-tight">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate leading-relaxed">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink/85">
                Detail
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="link-underline">
            Lihat semua services
            <ArrowRight size={14} className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

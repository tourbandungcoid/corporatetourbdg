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

const SERVICES = [
  {
    slug: "company-gathering",
    title: "Company Gathering",
    description:
      "Annual gathering atau quarterly meetup — untuk tim 50 sampai 800 pax.",
    Icon: IconGathering,
  },
  {
    slug: "team-building",
    title: "Team Building",
    description:
      "Outbound, indoor activities, atau workshop-based — di-design dari objective tim.",
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
      "Multi-day retreat untuk deep work, strategic planning, atau cultural reset.",
    Icon: IconRetreat,
  },
  {
    slug: "leadership-camp",
    title: "Leadership Camp",
    description:
      "Leadership development program untuk middle-to-senior management.",
    Icon: IconLeadership,
  },
  {
    slug: "executive-offsite",
    title: "Executive Offsite",
    description:
      "C-level offsite di premium villa atau resort. Discreet, premium, focused.",
    Icon: IconExecutive,
  },
  {
    slug: "incentive-trip",
    title: "Incentive Trip",
    description:
      "Reward program untuk top performers — destination experience yang memorable.",
    Icon: IconIncentive,
  },
  {
    slug: "annual-company-trip",
    title: "Annual Company Trip",
    description:
      "Big annual moment untuk seluruh perusahaan. Logistically complex, kami handle.",
    Icon: IconAnnual,
  },
  {
    slug: "mice",
    title: "MICE",
    description:
      "Meeting, Incentive, Conference, Exhibition — full-stack event production.",
    Icon: IconMice,
  },
  {
    slug: "glamping-corporate",
    title: "Glamping Corporate",
    description:
      "Unique outdoor experience tanpa kompromi kenyamanan. Differentiator buat tim Anda.",
    Icon: IconGlamping,
  },
];

export function Services() {
  return (
    <section className="section bg-bone" id="services">
      <div className="container-1280">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="eyebrow-brand">Services</p>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
            Apa yang Bisa Kami Handle untuk Tim Lo
          </h2>
          <p className="mt-6 text-lg text-slate">
            10 program corporate yang fully customizable — dari intimate retreat
            sampai mass gathering 2.000 pax.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card card-hover group p-6 flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light text-brand-deep">
                <service.Icon size={22} />
              </div>
              <h3 className="font-display mt-5 text-xl text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate leading-relaxed">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-deep">
                Lihat detail
                <ArrowRight
                  size={14}
                  className="arrow transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Footer link */}
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

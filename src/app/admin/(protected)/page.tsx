import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowUpRight } from "@/components/Icon";

export const metadata = { title: "Dashboard — 7Summits OS" };

async function getMetrics() {
  const supabase = await createClient();

  const [services, programs, caseStudies, testimonials, faqs, leads] =
    await Promise.all([
      supabase
        .from("services")
        .select("id", { count: "exact", head: true })
        .is("deleted_at", null),
      supabase
        .from("programs")
        .select("id", { count: "exact", head: true })
        .is("deleted_at", null),
      supabase
        .from("case_studies")
        .select("id", { count: "exact", head: true })
        .is("deleted_at", null),
      supabase
        .from("testimonials")
        .select("id", { count: "exact", head: true })
        .is("deleted_at", null),
      supabase
        .from("faqs")
        .select("id", { count: "exact", head: true })
        .is("deleted_at", null),
      supabase
        .from("leads")
        .select("id", { count: "exact", head: true })
        .eq("status", "new"),
    ]);

  return {
    services: services.count ?? 0,
    programs: programs.count ?? 0,
    caseStudies: caseStudies.count ?? 0,
    testimonials: testimonials.count ?? 0,
    faqs: faqs.count ?? 0,
    newLeads: leads.count ?? 0,
  };
}

export default async function AdminDashboard() {
  const metrics = await getMetrics();

  const cards = [
    { label: "New leads", value: metrics.newLeads, href: "/admin/leads", accent: true },
    { label: "Services", value: metrics.services, href: "/admin/content/services" },
    { label: "Programs", value: metrics.programs, href: "/admin/content/programs" },
    { label: "Case studies", value: metrics.caseStudies, href: "/admin/content/case-studies" },
    { label: "Testimonials", value: metrics.testimonials, href: "/admin/content/testimonials" },
    { label: "FAQs", value: metrics.faqs, href: "/admin/content/faqs" },
  ];

  return (
    <div className="max-w-[1200px]">
      <header className="mb-10">
        <p className="eyebrow-brand mb-3">Overview</p>
        <h1 className="font-display text-[36px] lg:text-[48px] leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
          Dashboard
        </h1>
        <p className="mt-3 text-[15px] text-[var(--color-slate)] max-w-[560px]">
          Selamat datang di 7Summits OS. Pantau lead masuk, kelola content, dan lihat
          performa singkat di sini.
        </p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`group block p-6 rounded-md border transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,31,26,0.06)] ${
              c.accent
                ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                : "bg-[var(--color-paper)] border-[var(--color-border)]"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className={`eyebrow ${
                  c.accent ? "text-[var(--color-brand)]" : "text-[var(--color-slate)]"
                }`}
              >
                {c.label}
              </span>
              <ArrowUpRight
                size={16}
                className={`${
                  c.accent
                    ? "text-white/40 group-hover:text-[var(--color-brand)]"
                    : "text-[var(--color-slate-mute)] group-hover:text-[var(--color-brand)]"
                } transition-colors`}
              />
            </div>
            <p
              className={`font-display text-[40px] lg:text-[48px] leading-none tabular ${
                c.accent ? "text-white" : "text-[var(--color-ink)]"
              }`}
            >
              {c.value}
            </p>
          </Link>
        ))}
      </div>

      <section>
        <h2 className="font-display text-[24px] text-[var(--color-ink)] mb-5">
          Quick actions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickAction
            title="Edit site settings"
            description="Update NAP, branding, SEO defaults, analytics."
            href="/admin/settings/site"
          />
          <QuickAction
            title="Manage services"
            description="Add/edit 8 service categories + pricing tiers."
            href="/admin/content/services"
          />
          <QuickAction
            title="View leads"
            description="Lihat inquiry baru, assign ke sales team."
            href="/admin/leads"
          />
        </div>
      </section>
    </div>
  );
}

function QuickAction({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-5 rounded-md border border-[var(--color-border)] bg-[var(--color-paper)] hover:border-[var(--color-ink-soft)] transition-colors group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-display text-[18px] text-[var(--color-ink)]">{title}</h3>
        <ArrowUpRight
          size={14}
          className="text-[var(--color-slate-mute)] group-hover:text-[var(--color-brand)] transition-colors mt-1"
        />
      </div>
      <p className="text-[13px] text-[var(--color-slate)] leading-relaxed">
        {description}
      </p>
    </Link>
  );
}

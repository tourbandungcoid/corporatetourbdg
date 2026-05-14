import Link from "next/link";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import { createAdminClient } from "@/lib/supabase/admin";
import { CONTACT, SITE } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata = { title: "Settings" };

type EnvCheck = {
  key: string;
  set: boolean;
  description: string;
  /** Whether being unset breaks functionality */
  required: boolean;
};

function checkEnv(): EnvCheck[] {
  return [
    {
      key: "NEXT_PUBLIC_SUPABASE_URL",
      set: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      description: "Supabase project URL",
      required: true,
    },
    {
      key: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      set: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      description: "Public Supabase key (for client auth)",
      required: true,
    },
    {
      key: "SUPABASE_SERVICE_ROLE_KEY",
      set: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      description: "Service role key for admin operations (bypasses RLS)",
      required: true,
    },
    {
      key: "NEXT_PUBLIC_SITE_URL",
      set: !!process.env.NEXT_PUBLIC_SITE_URL,
      description: "Production site URL for canonical + sitemap",
      required: true,
    },
    {
      key: "RESEND_API_KEY",
      set: !!process.env.RESEND_API_KEY,
      description: "Resend API key — email notifications no-op if unset",
      required: false,
    },
    {
      key: "RESEND_FROM_EMAIL",
      set: !!process.env.RESEND_FROM_EMAIL,
      description: "Verified Resend sender email",
      required: false,
    },
    {
      key: "RESEND_SALES_NOTIFY_TO",
      set: !!process.env.RESEND_SALES_NOTIFY_TO,
      description: "Comma-separated emails to receive new lead alerts",
      required: false,
    },
    {
      key: "ADMIN_BOOTSTRAP_SECRET",
      set: !!process.env.ADMIN_BOOTSTRAP_SECRET,
      description: "Token for /api/admin/bootstrap-admin (can remove after setup)",
      required: false,
    },
    {
      key: "CRON_SECRET",
      set: !!process.env.CRON_SECRET,
      description: "Token for /api/cron/daily-digest (Vercel cron auth)",
      required: false,
    },
  ];
}

async function getCounts() {
  const sb = createAdminClient();
  const [leads, profiles, activities] = await Promise.all([
    sb.from("leads").select("id", { count: "exact", head: true }).is("deleted_at", null),
    sb.from("profiles").select("id", { count: "exact", head: true }),
    sb.from("lead_activities").select("id", { count: "exact", head: true }),
  ]);
  return {
    leads: leads.count ?? 0,
    profiles: profiles.count ?? 0,
    activities: activities.count ?? 0,
  };
}

export default async function SettingsPage() {
  const profile = await getCurrentProfile();
  const envChecks = checkEnv();
  const counts = await getCounts();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="mb-8">
          <p className="eyebrow-brand">Settings</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Settings &amp; environment
          </h1>
        </div>

        {/* Site-wide editable groups */}
        <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Brand visual", "/admin/settings/brand", "Colors · fonts · logo · copy overrides"],
            ["Homepage copy", "/admin/settings/homepage", "Hero · Services · Why us · CTA · semua teks"],
            ["Contact", "/admin/settings/contact", "WhatsApp · email · address"],
            ["Social media", "/admin/settings/social", "LinkedIn · Instagram · YouTube · TikTok"],
            ["Analytics & Pixel", "/admin/settings/analytics", "GA4 · Meta Pixel · GTM · Hotjar · Clarity"],
            ["SEO defaults", "/admin/settings/seo", "Default title · description"],
            ["Reviews", "/admin/settings/reviews", "Google rating · review count"],
            ["Headline stats", "/admin/settings/stats", "400+ events · 92% repeat · etc."],
          ].map(([title, href, desc]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-border bg-paper p-5 hover:border-ink-soft transition-colors block"
            >
              <p className="font-display text-base text-ink">{title}</p>
              <p className="mt-1 text-xs text-slate">{desc}</p>
            </Link>
          ))}
        </section>

        {/* Your account */}
        <section className="rounded-2xl border border-border bg-paper overflow-hidden mb-6">
          <div className="px-6 py-5 border-b border-divider">
            <h2 className="font-display text-lg text-ink">Your account</h2>
          </div>
          <dl className="divide-y divide-divider/60">
            <Row label="Name" value={profile?.full_name ?? "—"} />
            <Row label="Email" value={profile?.email ?? "—"} mono />
            <Row label="Role" value={profile?.role ?? "—"} />
            <Row label="Active" value={profile?.is_active ? "Yes" : "No"} />
          </dl>
        </section>

        {/* DB counts */}
        <section className="rounded-2xl border border-border bg-paper overflow-hidden mb-6">
          <div className="px-6 py-5 border-b border-divider">
            <h2 className="font-display text-lg text-ink">Database</h2>
          </div>
          <dl className="divide-y divide-divider/60">
            <Row label="Leads" value={counts.leads.toString()} />
            <Row label="Admin users (profiles)" value={counts.profiles.toString()} />
            <Row label="Lead activities" value={counts.activities.toString()} />
          </dl>
          <div className="px-6 py-4 border-t border-divider bg-bone/40 text-xs text-slate">
            Supabase project:{" "}
            <a
              href="https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-ink hover:text-brand-deep underline"
            >
              nqxdxiejnxfffwztkrpd
            </a>
          </div>
        </section>

        {/* Env checks */}
        <section className="rounded-2xl border border-border bg-paper overflow-hidden mb-6">
          <div className="px-6 py-5 border-b border-divider">
            <h2 className="font-display text-lg text-ink">Environment variables</h2>
            <p className="text-sm text-slate mt-1">
              Manage in Vercel → Settings → Environment Variables. Missing required
              vars will break functionality.
            </p>
          </div>
          <ul className="divide-y divide-divider/60">
            {envChecks.map((e) => (
              <li
                key={e.key}
                className="px-6 py-4 flex items-start justify-between gap-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-sm text-ink">{e.key}</p>
                  <p className="text-xs text-slate mt-0.5">{e.description}</p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium tabular flex-shrink-0 ${
                    e.set
                      ? "bg-success/10 text-success"
                      : e.required
                      ? "bg-error/10 text-error"
                      : "bg-cream text-slate-mute"
                  }`}
                >
                  {e.set ? "✓ set" : e.required ? "× MISSING" : "○ unset"}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Content management */}
        <section className="rounded-2xl border border-border bg-paper overflow-hidden mb-6">
          <div className="px-6 py-5 border-b border-divider">
            <h2 className="font-display text-lg text-ink">Content management</h2>
            <p className="text-sm text-slate mt-1">
              Site content is data-driven via TypeScript files in the repo —
              edit + commit + push, auto-deploys via Vercel.
            </p>
          </div>
          <ul className="divide-y divide-divider/60">
            {[
              ["Services (10 entries)", "src/lib/services-data.ts"],
              ["Case studies (6)", "src/lib/case-studies-data.ts"],
              ["Insights (8 articles)", "src/lib/insights-data.ts"],
              ["FAQ categories (4)", "src/lib/faq-data.ts"],
              ["Packages (8)", "src/lib/packages-data.ts"],
              ["Team (6 bios)", "src/lib/team-data.ts"],
              ["Glossary (40+ terms)", "src/lib/glossary-data.ts"],
              ["Image registry", "src/lib/drive-images.ts"],
              ["Contact info + site constants", "src/lib/site.ts"],
            ].map(([name, path]) => (
              <li key={path} className="px-6 py-3 flex items-center justify-between gap-4">
                <span className="text-sm text-ink">{name}</span>
                <code className="font-mono text-xs text-slate">{path}</code>
              </li>
            ))}
          </ul>
        </section>

        {/* Quick links */}
        <section className="rounded-2xl border border-border bg-paper overflow-hidden">
          <div className="px-6 py-5 border-b border-divider">
            <h2 className="font-display text-lg text-ink">Quick links</h2>
          </div>
          <div className="p-6 grid gap-3 sm:grid-cols-2 text-sm">
            <a
              href="https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/sql/new"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-paper px-4 py-3 hover:bg-cream transition text-ink"
            >
              Supabase SQL Editor →
            </a>
            <a
              href="https://github.com/tourbandungcoid/corporatetourbdg"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-paper px-4 py-3 hover:bg-cream transition text-ink"
            >
              GitHub repo →
            </a>
            <Link
              href="/admin/users"
              className="rounded-lg border border-border bg-paper px-4 py-3 hover:bg-cream transition text-ink"
            >
              Manage admin users →
            </Link>
            <Link
              href={SITE.url}
              target="_blank"
              className="rounded-lg border border-border bg-paper px-4 py-3 hover:bg-cream transition text-ink"
            >
              Open public site →
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg border border-border bg-paper px-4 py-3 hover:bg-cream transition text-ink"
            >
              Support email →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="px-6 py-3 flex items-center justify-between gap-4">
      <dt className="text-sm text-slate-mute">{label}</dt>
      <dd className={`text-sm text-ink ${mono ? "font-mono" : ""} tabular`}>
        {value}
      </dd>
    </div>
  );
}

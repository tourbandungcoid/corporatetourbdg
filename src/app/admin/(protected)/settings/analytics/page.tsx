import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { updateAnalytics } from "@/lib/actions/app-settings-actions";
import { getAppSettings } from "@/lib/app-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "Analytics & Pixel settings" };

export default async function AnalyticsSettingsPage() {
  const a = (await getAppSettings()).analytics;
  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link href="/admin/settings" className="text-sm text-slate hover:text-ink">
            ← Back to settings
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Settings</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Analytics & Pixel
          </h1>
          <p className="mt-2 text-sm text-slate">
            Tracking codes. Scripts auto-inject di production saja — dev mode tidak load.
            Kosongkan field yang belum punya account.
          </p>
        </div>

        <div className="rounded-2xl border border-warm/30 bg-warm/5 p-4 text-xs text-slate mb-6">
          <p className="font-medium text-ink mb-1">⚠ Tips</p>
          <p>
            Kalau pakai <strong>GTM</strong>, biasanya semua tag (GA4, Meta Pixel, dst.)
            di-manage dari GTM. Set GTM ID di sini, sisanya kosongkan untuk hindari
            double-fire.
          </p>
        </div>

        <AppSettingsForm
          title="Tracking IDs"
          action={updateAnalytics}
          fields={[
            {
              name: "gtm_id",
              label: "Google Tag Manager ID",
              placeholder: "GTM-XXXXXX",
              hint: "Container ID dari tagmanager.google.com",
              default: a.gtm_id,
            },
            {
              name: "ga4_id",
              label: "Google Analytics 4 ID",
              placeholder: "G-XXXXXXXXXX",
              hint: "Skip kalau GTM sudah handle GA4",
              default: a.ga4_id,
            },
            {
              name: "meta_pixel_id",
              label: "Meta (Facebook) Pixel ID",
              placeholder: "1234567890",
              hint: "Skip kalau GTM sudah handle Meta Pixel",
              default: a.meta_pixel_id,
            },
            {
              name: "hotjar_id",
              label: "Hotjar Site ID",
              placeholder: "3456789",
              default: a.hotjar_id,
            },
            {
              name: "clarity_id",
              label: "Microsoft Clarity ID",
              placeholder: "abcdefghij",
              default: a.clarity_id,
            },
            {
              name: "linkedin_partner_id",
              label: "LinkedIn Insight Tag (Partner ID)",
              placeholder: "1234567",
              hint: "Dari LinkedIn Campaign Manager → Account Assets → Insight Tag. Wajib untuk B2B retargeting + lookalike audience.",
              default: a.linkedin_partner_id,
            },
          ]}
        />
      </div>
    </main>
  );
}

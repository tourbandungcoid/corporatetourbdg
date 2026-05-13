import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { updateStatsSettings } from "@/lib/actions/app-settings-actions";
import { getAppSettings } from "@/lib/app-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "Headline stats" };

export default async function StatsSettingsPage() {
  const s = (await getAppSettings()).stats;
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
            Headline stats
          </h1>
          <p className="mt-2 text-sm text-slate">
            Angka-angka yang muncul di hero, trust bars, dan footer. Update bareng
            milestone pertumbuhan.
          </p>
        </div>

        <AppSettingsForm
          title="Trust numbers"
          action={updateStatsSettings}
          fields={[
            { name: "events_delivered", label: "Events delivered", default: s.events_delivered, placeholder: "400+" },
            { name: "years_operating", label: "Years operating", default: s.years_operating, placeholder: "Sejak 2018" },
            { name: "repeat_booking_rate", label: "Repeat booking rate", default: s.repeat_booking_rate, placeholder: "92%" },
            { name: "avg_response_time", label: "Avg response time", default: s.avg_response_time, placeholder: "6 jam" },
            { name: "companies_trusted", label: "Companies trusted", default: s.companies_trusted, placeholder: "100+" },
            { name: "largest_event_pax", label: "Largest event pax", default: s.largest_event_pax, placeholder: "1,200" },
            { name: "venue_partners", label: "Venue partners", default: s.venue_partners, placeholder: "60+" },
            { name: "industries_served", label: "Industries served", default: s.industries_served, placeholder: "8+" },
          ]}
        />
      </div>
    </main>
  );
}

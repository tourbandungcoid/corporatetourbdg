import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { updateReviewsSettings } from "@/lib/actions/app-settings-actions";
import { getAppSettings } from "@/lib/app-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "Reviews settings" };

export default async function ReviewsSettingsPage() {
  const r = (await getAppSettings()).reviews;
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
            Google reviews
          </h1>
          <p className="mt-2 text-sm text-slate">
            Rating + count yang muncul di GoogleReviewsBadge + schema.org AggregateRating.
            Update saat jumlah review naik.
          </p>
        </div>

        <AppSettingsForm
          title="Google reviews data"
          action={updateReviewsSettings}
          fields={[
            {
              name: "google_rating",
              label: "Google rating (0–5)",
              type: "number",
              hint: "e.g. 4.9",
              default: r.google_rating,
            },
            {
              name: "google_review_count",
              label: "Review count",
              type: "number",
              hint: "e.g. 105",
              default: r.google_review_count,
            },
            {
              name: "google_maps_url",
              label: "Google Maps URL",
              type: "url",
              default: r.google_maps_url,
            },
          ]}
        />
      </div>
    </main>
  );
}

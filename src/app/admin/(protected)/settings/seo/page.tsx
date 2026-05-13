import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { updateSeoDefaults } from "@/lib/actions/app-settings-actions";
import { getAppSettings } from "@/lib/app-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "SEO defaults" };

export default async function SeoSettingsPage() {
  const seo = (await getAppSettings()).seo;
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
            SEO defaults
          </h1>
          <p className="mt-2 text-sm text-slate">
            Fallback title + description untuk page yang gak override metadata sendiri.
          </p>
        </div>

        <AppSettingsForm
          title="Default site metadata"
          action={updateSeoDefaults}
          fields={[
            {
              name: "default_title",
              label: "Default title *",
              hint: "Used as homepage title + fallback for other pages",
              default: seo.default_title,
            },
            {
              name: "default_description",
              label: "Default description *",
              type: "textarea",
              hint: "160–300 chars · used for Google snippet + Open Graph",
              default: seo.default_description,
            },
          ]}
        />
      </div>
    </main>
  );
}

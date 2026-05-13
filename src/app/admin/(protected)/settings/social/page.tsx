import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { updateSocial } from "@/lib/actions/app-settings-actions";
import { getAppSettings } from "@/lib/app-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "Social settings" };

export default async function SocialSettingsPage() {
  const s = (await getAppSettings()).social;
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
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">Social media</h1>
          <p className="mt-2 text-sm text-slate">
            Profile URLs untuk footer + schema.org/sameAs. Kosongkan kalau gak punya
            account di platform tertentu.
          </p>
        </div>

        <AppSettingsForm
          title="Social profile URLs"
          action={updateSocial}
          fields={[
            { name: "linkedin", label: "LinkedIn", type: "url", default: s.linkedin },
            { name: "instagram", label: "Instagram", type: "url", default: s.instagram },
            { name: "youtube", label: "YouTube", type: "url", default: s.youtube },
            { name: "tiktok", label: "TikTok", type: "url", default: s.tiktok },
            { name: "facebook", label: "Facebook", type: "url", default: s.facebook },
          ]}
        />
      </div>
    </main>
  );
}

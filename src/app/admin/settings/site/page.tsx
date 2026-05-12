import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SiteSettingsForm } from "./SiteSettingsForm";
import type { SiteSettings } from "@/types/database";

export const metadata = { title: "Site Settings — 7Summits OS" };

export default async function SiteSettingsPage() {
  const supabase = await createClient();

  // Only super_admin
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "super_admin") {
    return (
      <div className="max-w-[600px]">
        <h1 className="font-display text-[32px] text-[var(--color-ink)] mb-3">
          Access denied
        </h1>
        <p className="text-[15px] text-[var(--color-slate)]">
          Site settings hanya bisa diakses oleh Super Admin.
        </p>
      </div>
    );
  }

  const { data: settings, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !settings) {
    return (
      <div className="max-w-[600px]">
        <h1 className="font-display text-[24px] text-[var(--color-ink)] mb-3">
          Site settings not initialized
        </h1>
        <p className="text-[14px] text-[var(--color-slate)]">
          Error: {error?.message ?? "row missing"}. Run migration 03 again.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[900px]">
      <header className="mb-10">
        <p className="eyebrow-brand mb-3">Settings</p>
        <h1 className="font-display text-[36px] lg:text-[44px] leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
          Site Settings
        </h1>
        <p className="mt-3 text-[15px] text-[var(--color-slate)] max-w-[600px]">
          Pengaturan global yang tampil di seluruh website — NAP, social, branding,
          SEO defaults, dan analytics tracking.
        </p>
      </header>

      <SiteSettingsForm initial={settings as SiteSettings} />
    </div>
  );
}

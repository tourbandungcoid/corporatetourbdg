import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/AdminShell";
import type { Profile } from "@/types/database";

export const metadata = {
  title: "7Summits OS — Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Login page is rendered by /admin/login/page.tsx which short-circuits via middleware.
  // Belt-and-suspenders: if no user, redirect again.
  if (!user) {
    redirect("/admin/login");
  }

  // Fetch profile (role-aware UI)
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile || !profile.is_active) {
    redirect("/admin/login?error=inactive");
  }

  return (
    <AdminShell profile={profile as Profile}>{children}</AdminShell>
  );
}

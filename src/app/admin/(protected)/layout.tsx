import { redirect } from "next/navigation";
import { getCurrentProfile, canAccessAdmin } from "@/lib/auth/getCurrentProfile";
import { createAdminClient } from "@/lib/supabase/admin";
import { Sidebar } from "@/components/admin/Sidebar";
import { TopBar } from "@/components/admin/TopBar";

export const metadata = {
  title: { default: "Admin", template: "%s · Admin" },
  robots: { index: false, follow: false },
};

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getCurrentProfile();

  if (!profile) {
    redirect("/admin/login");
  }

  if (!canAccessAdmin(profile.role)) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-bone px-4">
        <div className="max-w-md rounded-3xl border border-border bg-paper p-10 text-center">
          <p className="eyebrow text-error">Access Denied</p>
          <h1 className="font-display mt-3 text-2xl text-ink">
            Akun lo belum punya akses dashboard.
          </h1>
          <p className="mt-4 text-sm text-slate">
            Hubungi super admin untuk minta role assignment. Email lo:{" "}
            <span className="font-mono">{profile.email}</span>
          </p>
        </div>
      </main>
    );
  }

  const taskCount = await getOpenTaskCount();

  return (
    <div className="min-h-screen bg-bone flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar profile={profile} taskCount={taskCount} />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

async function getOpenTaskCount(): Promise<number> {
  try {
    const sb = createAdminClient();
    const nowIso = new Date().toISOString();
    const [followUps, unassignedHot] = await Promise.all([
      sb
        .from("leads")
        .select("id", { count: "exact", head: true })
        .lte("follow_up_at", nowIso)
        .not("follow_up_at", "is", null)
        .is("deleted_at", null),
      sb
        .from("leads")
        .select("id", { count: "exact", head: true })
        .in("priority", ["hot", "warm"])
        .in("status", [
          "submitted",
          "under_review",
          "drafting",
          "internal_qa",
          "sent",
          "feedback_requested",
        ])
        .is("assigned_to", null)
        .is("deleted_at", null),
    ]);
    return (followUps.count ?? 0) + (unassignedHot.count ?? 0);
  } catch {
    return 0;
  }
}

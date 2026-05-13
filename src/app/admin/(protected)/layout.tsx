import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentProfile, canAccessAdmin } from "@/lib/auth/getCurrentProfile";
import { createClient } from "@/lib/supabase/server";
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
  // Check raw auth state first to disambiguate the two failure modes:
  //   1. No session → redirect to /admin/login (middleware also does this)
  //   2. Session exists but no profile row → show error (don't redirect,
  //      otherwise we loop with middleware's /admin/login → /admin redirect)
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const profile = await getCurrentProfile();

  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-bone px-4 py-12">
        <div className="max-w-lg rounded-3xl border border-warm/30 bg-paper p-10 text-center">
          <p className="eyebrow text-warm">Profile not found</p>
          <h1 className="font-display mt-3 text-2xl text-ink">
            Akun lo terdaftar, tapi profile belum lengkap.
          </h1>
          <p className="mt-4 text-sm text-slate leading-relaxed">
            Auth user{" "}
            <span className="font-mono text-ink">{user.email}</span> exists
            tapi row di tabel{" "}
            <code className="font-mono text-xs bg-cream px-1 py-0.5 rounded">
              public.profiles
            </code>{" "}
            kosong. Bug pas migration / trigger gagal fire.
          </p>
          <p className="mt-4 text-sm text-slate">
            Klik tombol di bawah untuk auto-fix (insert profile row + promote
            ke super_admin):
          </p>
          <form action="/api/admin/repair-superadmin" method="post" className="mt-6 inline-block">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-6 h-11 text-sm font-medium hover:bg-brand-deep transition"
            >
              Repair profile + login
            </button>
          </form>
          <p className="mt-6 text-xs text-slate-mute">
            Atau sign out + login ulang dari{" "}
            <Link href="/admin/login" className="underline">
              /admin/login
            </Link>
            .
          </p>
        </div>
      </main>
    );
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
            Role: <span className="font-mono">{profile.role}</span>. Email lo:{" "}
            <span className="font-mono">{profile.email}</span>. Hubungi super
            admin untuk role assignment.
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

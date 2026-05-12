import { redirect } from "next/navigation";
import { getCurrentProfile, canAccessAdmin } from "@/lib/auth/getCurrentProfile";
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

  return (
    <div className="min-h-screen bg-bone flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar profile={profile} />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import { listAdminUsers } from "@/lib/actions/admin-user-actions";
import { AdminUsersPanel } from "@/components/admin/AdminUsersPanel";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin Users" };

export default async function AdminUsersPage() {
  const profile = await getCurrentProfile();
  if (!profile) redirect("/admin/login");

  if (profile.role !== "super_admin") {
    return (
      <main className="p-6 md:p-10">
        <div className="max-w-2xl">
          <p className="eyebrow-brand">Users</p>
          <h1 className="font-display mt-2 text-3xl text-ink">
            Restricted.
          </h1>
          <p className="mt-4 text-base text-slate">
            User management hanya untuk role <code className="text-xs bg-cream px-1.5 py-0.5 rounded">super_admin</code>. Role lo saat ini: <strong>{profile.role}</strong>.
          </p>
        </div>
      </main>
    );
  }

  const users = await listAdminUsers();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-5xl">
        <div className="mb-8">
          <p className="eyebrow-brand">Team</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Admin users
          </h1>
          <p className="mt-3 text-sm text-slate">
            Invite teammate, ubah role, atau reset password. Super admin only.
          </p>
        </div>

        <AdminUsersPanel users={users} currentUserId={profile.id} />
      </div>
    </main>
  );
}

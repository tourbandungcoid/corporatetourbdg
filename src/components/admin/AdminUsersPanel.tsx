"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  createAdminUser,
  updateAdminUser,
  resetAdminPassword,
  type AdminUserRow,
} from "@/lib/actions/admin-user-actions";

const ROLE_OPTIONS = [
  { value: "super_admin", label: "Super Admin" },
  { value: "sales_admin", label: "Sales Admin" },
  { value: "marketing_admin", label: "Marketing Admin" },
  { value: "content_admin", label: "Content Admin" },
  { value: "viewer", label: "Viewer" },
] as const;

type Props = {
  users: AdminUserRow[];
  currentUserId: string;
};

export function AdminUsersPanel({ users, currentUserId }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    kind: "ok" | "error";
    text: string;
    password?: string;
  } | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  function showMessage(
    kind: "ok" | "error",
    text: string,
    password?: string
  ) {
    setMessage({ kind, text, password });
    if (!password) {
      setTimeout(() => setMessage(null), 5000);
    }
  }

  function handleCreate(formData: FormData) {
    startTransition(async () => {
      const result = await createAdminUser(formData);
      showMessage(
        result.ok ? "ok" : "error",
        result.message ?? "",
        result.password
      );
      if (result.ok) {
        setShowCreate(false);
        router.refresh();
      }
    });
  }

  function handleUpdate(formData: FormData) {
    startTransition(async () => {
      const result = await updateAdminUser(formData);
      showMessage(result.ok ? "ok" : "error", result.message ?? "");
      if (result.ok) router.refresh();
    });
  }

  function handleReset(userId: string, email: string) {
    if (
      !confirm(
        `Reset password untuk ${email}? Password baru akan di-generate dan harus di-share secara manual.`
      )
    )
      return;
    const fd = new FormData();
    fd.set("userId", userId);
    startTransition(async () => {
      const result = await resetAdminPassword(fd);
      showMessage(
        result.ok ? "ok" : "error",
        result.message ?? "",
        result.password
      );
      if (result.ok) router.refresh();
    });
  }

  return (
    <div className="space-y-6">
      {message && (
        <div
          className={`rounded-2xl border p-4 text-sm ${
            message.kind === "ok"
              ? "border-success/30 bg-success/5 text-success"
              : "border-error/30 bg-error/5 text-error"
          }`}
        >
          <p className="font-medium">{message.text}</p>
          {message.password && (
            <div className="mt-3 rounded-lg bg-paper border border-divider p-3">
              <p className="text-xs uppercase tracking-wider text-slate-mute mb-1.5">
                Temporary password — copy + share securely
              </p>
              <p className="font-mono text-lg text-ink select-all break-all">
                {message.password}
              </p>
              <p className="mt-2 text-xs text-slate-mute">
                Password ini hanya ditampilkan SEKALI. Tutup dialog ini akan menghilangkan.
              </p>
              <button
                type="button"
                onClick={() => setMessage(null)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-ink text-paper px-4 h-9 text-xs font-medium hover:bg-brand-deep transition"
              >
                I&apos;ve saved it — close
              </button>
            </div>
          )}
        </div>
      )}

      {/* Create user toggle */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate">
          {users.length} user{users.length !== 1 ? "s" : ""}
        </p>
        <button
          type="button"
          onClick={() => setShowCreate((v) => !v)}
          className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
        >
          {showCreate ? "Cancel" : "+ Invite user"}
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form
          action={handleCreate}
          className="rounded-2xl border border-border bg-paper p-5 space-y-4"
        >
          <p className="font-display text-lg text-ink">Invite new admin</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="teammate@perusahaan.com"
                className="input"
                disabled={isPending}
              />
            </div>
            <div>
              <label className="label" htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                minLength={2}
                placeholder="Nama lengkap"
                className="input"
                disabled={isPending}
              />
            </div>
            <div>
              <label className="label" htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                defaultValue="sales_admin"
                className="select"
                disabled={isPending}
              >
                {ROLE_OPTIONS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-xs text-slate-mute">
            Sistem akan generate temp password yang ditampilkan satu kali setelah create. Share ke user via secure channel.
          </p>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            Create user
          </button>
        </form>
      )}

      {/* Users table */}
      <div className="rounded-2xl border border-border bg-paper overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Created</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => {
                const isMe = u.id === currentUserId;
                return (
                  <tr
                    key={u.id}
                    className="border-b border-divider/60 hover:bg-cream/40 transition"
                  >
                    <td className="px-6 py-4 font-medium text-ink">
                      {u.fullName ?? "—"}
                      {isMe && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-brand/10 text-brand-deep px-2 py-0.5 text-[10px] font-medium">
                          You
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-slate font-mono text-xs">
                      {u.email}
                    </td>
                    <td className="px-4 py-4">
                      <form action={handleUpdate} className="inline">
                        <input type="hidden" name="userId" value={u.id} />
                        <select
                          name="role"
                          defaultValue={u.role}
                          disabled={isPending || isMe}
                          className="select py-1.5 text-xs"
                          onChange={(e) => {
                            const fd = new FormData();
                            fd.set("userId", u.id);
                            fd.set("role", e.target.value);
                            handleUpdate(fd);
                          }}
                        >
                          {ROLE_OPTIONS.map((r) => (
                            <option key={r.value} value={r.value}>
                              {r.label}
                            </option>
                          ))}
                        </select>
                      </form>
                    </td>
                    <td className="px-4 py-4">
                      <form action={handleUpdate} className="inline">
                        <input type="hidden" name="userId" value={u.id} />
                        <input
                          type="hidden"
                          name="isActive"
                          value={u.isActive ? "false" : "true"}
                        />
                        <button
                          type="submit"
                          disabled={isPending || isMe}
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition ${
                            u.isActive
                              ? "bg-success/10 text-success hover:bg-success/20"
                              : "bg-error/10 text-error hover:bg-error/20"
                          } disabled:opacity-60 disabled:cursor-not-allowed`}
                        >
                          {u.isActive ? "● Active" : "○ Inactive"}
                        </button>
                      </form>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate tabular">
                      {new Date(u.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleReset(u.id, u.email)}
                        disabled={isPending}
                        className="text-xs text-slate hover:text-ink hover:underline disabled:opacity-60"
                      >
                        Reset password
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

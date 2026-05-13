"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type AdminActionResult = {
  ok: boolean;
  message?: string;
  password?: string;
};

const ROLE_VALUES = [
  "super_admin",
  "content_admin",
  "sales_admin",
  "marketing_admin",
  "viewer",
] as const;

function generateTempPassword(): string {
  // 16-char password: 4 segments of mixed alpha+digit, separated by '-'
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  const seg = (n: number) =>
    Array.from(
      { length: n },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  return `${seg(4)}-${seg(4)}-${seg(4)}-${seg(4)}`;
}

// ---------------------------------------------------------------------
// Create new admin user (email + temp password, default role: sales_admin)
// ---------------------------------------------------------------------
const createSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2).max(100),
  role: z.enum(ROLE_VALUES),
});

export async function createAdminUser(formData: FormData): Promise<AdminActionResult> {
  const profile = await getCurrentProfile();
  if (!profile || profile.role !== "super_admin") {
    return { ok: false, message: "Only super_admin can create users" };
  }

  const parsed = createSchema.safeParse({
    email: (formData.get("email") as string)?.toLowerCase().trim(),
    fullName: formData.get("fullName"),
    role: formData.get("role"),
  });
  if (!parsed.success) {
    return { ok: false, message: "Invalid input (email + full name required)" };
  }

  const sb = createAdminClient();

  // Check if user already exists
  const { data: list } = await sb.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (list.users.some((u) => u.email?.toLowerCase() === parsed.data.email)) {
    return { ok: false, message: "User with this email already exists" };
  }

  const tempPassword = generateTempPassword();

  const { data, error } = await sb.auth.admin.createUser({
    email: parsed.data.email,
    password: tempPassword,
    email_confirm: true,
    user_metadata: { full_name: parsed.data.fullName },
  });

  if (error || !data.user) {
    return { ok: false, message: error?.message ?? "Failed to create auth user" };
  }

  // Upsert profile with desired role
  const { error: profErr } = await sb.from("profiles").upsert(
    {
      id: data.user.id,
      email: parsed.data.email,
      full_name: parsed.data.fullName,
      role: parsed.data.role,
      is_active: true,
    },
    { onConflict: "id" }
  );

  if (profErr) {
    return { ok: false, message: `Auth created but profile failed: ${profErr.message}` };
  }

  revalidatePath("/admin/users");
  return {
    ok: true,
    message: `User created. Share these credentials securely.`,
    password: tempPassword,
  };
}

// ---------------------------------------------------------------------
// Update role / active state
// ---------------------------------------------------------------------
const updateSchema = z.object({
  userId: z.string().uuid(),
  role: z.enum(ROLE_VALUES).optional(),
  isActive: z.enum(["true", "false"]).optional(),
});

export async function updateAdminUser(formData: FormData): Promise<AdminActionResult> {
  const profile = await getCurrentProfile();
  if (!profile || profile.role !== "super_admin") {
    return { ok: false, message: "Only super_admin can update users" };
  }

  const parsed = updateSchema.safeParse({
    userId: formData.get("userId"),
    role: formData.get("role") ?? undefined,
    isActive: formData.get("isActive") ?? undefined,
  });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  if (parsed.data.userId === profile.id && parsed.data.role && parsed.data.role !== "super_admin") {
    return { ok: false, message: "You cannot demote yourself" };
  }

  const sb = createAdminClient();
  const patch: Record<string, unknown> = {};
  if (parsed.data.role) patch.role = parsed.data.role;
  if (parsed.data.isActive !== undefined) {
    patch.is_active = parsed.data.isActive === "true";
  }

  if (Object.keys(patch).length === 0) {
    return { ok: false, message: "Nothing to update" };
  }

  const { error } = await sb.from("profiles").update(patch).eq("id", parsed.data.userId);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/admin/users");
  return { ok: true, message: "User updated" };
}

// ---------------------------------------------------------------------
// Reset password (generate new temp password)
// ---------------------------------------------------------------------
const resetSchema = z.object({ userId: z.string().uuid() });

export async function resetAdminPassword(formData: FormData): Promise<AdminActionResult> {
  const profile = await getCurrentProfile();
  if (!profile || profile.role !== "super_admin") {
    return { ok: false, message: "Only super_admin can reset passwords" };
  }

  const parsed = resetSchema.safeParse({ userId: formData.get("userId") });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  const sb = createAdminClient();
  const tempPassword = generateTempPassword();

  const { error } = await sb.auth.admin.updateUserById(parsed.data.userId, {
    password: tempPassword,
  });
  if (error) return { ok: false, message: error.message };

  revalidatePath("/admin/users");
  return {
    ok: true,
    message: "Password reset. Share the new credentials securely.",
    password: tempPassword,
  };
}

// ---------------------------------------------------------------------
// List all admin users
// ---------------------------------------------------------------------
export type AdminUserRow = {
  id: string;
  email: string;
  fullName: string | null;
  role: string;
  isActive: boolean;
  createdAt: string;
};

export async function listAdminUsers(): Promise<AdminUserRow[]> {
  const sb = createAdminClient();
  const { data } = await sb
    .from("profiles")
    .select("id, email, full_name, role, is_active, created_at")
    .order("created_at", { ascending: false });

  return (data ?? []).map((u) => ({
    id: u.id,
    email: u.email,
    fullName: u.full_name,
    role: u.role,
    isActive: u.is_active,
    createdAt: u.created_at,
  }));
}

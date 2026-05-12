import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type UserRole =
  | "super_admin"
  | "content_admin"
  | "sales_admin"
  | "marketing_admin"
  | "viewer";

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  is_active: boolean;
};

/**
 * Get the currently signed-in user's profile.
 * Returns null if not signed in or profile missing.
 *
 * Uses admin client to bypass RLS (we still scope to the auth.uid()).
 */
export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Use admin client to fetch profile (sidesteps RLS for own profile)
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("profiles")
    .select("id, email, full_name, avatar_url, role, is_active")
    .eq("id", user.id)
    .single();

  if (error || !data) return null;
  return data as Profile;
}

export function canAccessAdmin(role: UserRole): boolean {
  return ["super_admin", "content_admin", "sales_admin", "marketing_admin"].includes(
    role
  );
}

export function canManageLeads(role: UserRole): boolean {
  return ["super_admin", "sales_admin"].includes(role);
}

export function canEditContent(role: UserRole): boolean {
  return ["super_admin", "content_admin", "marketing_admin"].includes(role);
}

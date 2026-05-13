import { createClient } from "@/lib/supabase/server";

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
 *
 * Uses the user-session server client (NOT service_role) so it works
 * even when SUPABASE_SERVICE_ROLE_KEY is misconfigured. RLS policy
 * `profiles_select_self_or_admin` lets a user read their own profile
 * via auth.uid().
 */
export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, full_name, avatar_url, role, is_active")
    .eq("id", user.id)
    .maybeSingle();

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

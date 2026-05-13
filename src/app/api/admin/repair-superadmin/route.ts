/**
 * Auto-repair endpoint:
 *
 * - Looks up the currently signed-in auth user from cookies
 * - Ensures a row exists in public.profiles for that user
 * - Promotes role to super_admin + is_active=true
 *
 * Use case: the seed_superadmin migration ran but handle_new_user
 * trigger didn't fire, so /admin shows "Profile not found" loop.
 * Hitting this endpoint via the in-page button fixes it.
 *
 * Safety: only repairs the currently-signed-in user (no email injection).
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

async function handle() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(
      new URL("/admin/login", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost")
    );
  }

  const admin = createAdminClient();

  // Upsert profile with super_admin role
  const { error } = await admin.from("profiles").upsert(
    {
      id: user.id,
      email: user.email ?? "unknown@admin.local",
      full_name:
        (user.user_metadata?.full_name as string | undefined) ?? "Admin",
      role: "super_admin",
      is_active: true,
    },
    { onConflict: "id" }
  );

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message, userId: user.id },
      { status: 500 }
    );
  }

  return NextResponse.redirect(
    new URL("/admin", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost")
  );
}

export async function GET() {
  return handle();
}
export async function POST() {
  return handle();
}

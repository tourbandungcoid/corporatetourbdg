/**
 * Auto-repair endpoint:
 *
 * Calls the SECURITY DEFINER function repair_superadmin_profile() via
 * the user's authenticated session — no service_role key needed. The
 * function checks caller's email == 'superadmin@admin.local' before
 * doing anything, so this can't be abused.
 *
 * Use case: handle_new_user trigger failed to fire OR Vercel's
 * SUPABASE_SERVICE_ROLE_KEY is misconfigured, so /admin shows
 * "Profile not found". Click the in-page button → land on dashboard.
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

function getSiteBase(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

async function handle() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/admin/login", getSiteBase()));
  }

  const { error } = await supabase.rpc("repair_superadmin_profile");

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message, userId: user.id },
      { status: 500 }
    );
  }

  return NextResponse.redirect(new URL("/admin", getSiteBase()));
}

export async function GET() {
  return handle();
}
export async function POST() {
  return handle();
}

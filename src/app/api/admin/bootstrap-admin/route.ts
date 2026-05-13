/**
 * One-shot admin bootstrap endpoint.
 *
 * Usage:
 *   1. Set in Vercel env:
 *      - ADMIN_BOOTSTRAP_SECRET  (random token, e.g. uuid)
 *      - ADMIN_BOOTSTRAP_EMAIL   (login email)
 *      - ADMIN_BOOTSTRAP_PASSWORD (login password, min 8 chars)
 *   2. Hit GET /api/admin/bootstrap-admin?secret=<SECRET> once.
 *   3. Login at /admin/login with the email + password.
 *
 * Idempotent — running again just resets the password and re-promotes
 * the profile to super_admin.
 */
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret =
    url.searchParams.get("secret") ?? req.headers.get("x-admin-secret");

  const expected = process.env.ADMIN_BOOTSTRAP_SECRET;
  const email = process.env.ADMIN_BOOTSTRAP_EMAIL;
  const password = process.env.ADMIN_BOOTSTRAP_PASSWORD;

  if (!expected || !email || !password) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Missing env. Set ADMIN_BOOTSTRAP_SECRET, ADMIN_BOOTSTRAP_EMAIL, ADMIN_BOOTSTRAP_PASSWORD in Vercel.",
      },
      { status: 500 }
    );
  }

  if (!secret || secret !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (password.length < 8) {
    return NextResponse.json(
      { ok: false, error: "ADMIN_BOOTSTRAP_PASSWORD must be at least 8 characters." },
      { status: 400 }
    );
  }

  const sb = createAdminClient();

  // Find existing user (paginate through up to 1k users, enough for admin team)
  const { data: list, error: listErr } = await sb.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });
  if (listErr) {
    return NextResponse.json({ ok: false, error: listErr.message }, { status: 500 });
  }

  const existing = list.users.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase()
  );

  let userId: string;
  let action: "created" | "updated";

  if (existing) {
    const { error } = await sb.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
    });
    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    userId = existing.id;
    action = "updated";
  } else {
    const { data, error } = await sb.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (error || !data.user) {
      return NextResponse.json(
        { ok: false, error: error?.message ?? "Failed to create user" },
        { status: 500 }
      );
    }
    userId = data.user.id;
    action = "created";
  }

  // Upsert profile + promote to super_admin
  const { error: profileErr } = await sb.from("profiles").upsert(
    {
      id: userId,
      email,
      role: "super_admin",
      is_active: true,
    },
    { onConflict: "id" }
  );

  if (profileErr) {
    return NextResponse.json(
      { ok: false, error: `Auth ok but profile failed: ${profileErr.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    action,
    email,
    role: "super_admin",
    nextStep: "Go to /admin/login and sign in with the email + password.",
  });
}

/**
 * Auto-repair endpoint:
 *
 * Calls the SECURITY DEFINER function repair_superadmin_profile() via
 * the user's authenticated session — no service_role key needed.
 *
 * Important: uses 303 See Other (not default 307) on success so the
 * browser swaps POST → GET on redirect. With 307 the browser would
 * POST /admin which renders the page-not-found-loop view.
 *
 * On failure renders a small HTML page with the actual error message
 * instead of bouncing the user back to the same UI in silence.
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

function siteBase(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

function errorPage(title: string, detail: string): Response {
  const html = `<!DOCTYPE html>
<html lang="id">
<head><meta charset="utf-8"><title>${title}</title>
<style>
  body{margin:0;padding:48px 24px;font:14px/1.5 system-ui,sans-serif;background:#FAFAF7;color:#0F1F1A}
  .card{max-width:640px;margin:0 auto;background:#fff;border:1px solid #E5E5DC;border-radius:24px;padding:32px}
  h1{font-size:22px;margin:0 0 12px}
  pre{background:#F1F2EA;border-radius:12px;padding:16px;overflow:auto;font-size:12px;white-space:pre-wrap;word-break:break-word}
  a{color:#4E7E2A;font-weight:600}
</style>
</head>
<body><div class="card">
<p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#B8924C;margin:0 0 8px">Repair failed</p>
<h1>${title}</h1>
<pre>${detail.replace(/</g, "&lt;")}</pre>
<p><a href="/admin">← Back to /admin</a> · <a href="/admin/login">Sign out + retry</a></p>
</div></body></html>`;
  return new Response(html, {
    status: 500,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

async function handle() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/admin/login", siteBase()), 303);
  }

  // Try the SECURITY DEFINER repair function first
  const { data: rpcData, error: rpcError } = await supabase.rpc(
    "repair_superadmin_profile"
  );

  if (rpcError) {
    return errorPage(
      "RPC repair_superadmin_profile() failed",
      [
        `user.id  = ${user.id}`,
        `user.email = ${user.email}`,
        `error.code = ${rpcError.code ?? "(none)"}`,
        `error.message = ${rpcError.message}`,
        rpcError.details ? `error.details = ${rpcError.details}` : "",
        rpcError.hint ? `error.hint = ${rpcError.hint}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
  }

  // Sanity check: verify profile row exists now via user-session client
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, email, role, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    return errorPage(
      "Profile lookup after RPC failed",
      [
        `user.id = ${user.id}`,
        `rpcData = ${JSON.stringify(rpcData)}`,
        `error.message = ${profileError.message}`,
      ].join("\n")
    );
  }

  if (!profile) {
    return errorPage(
      "RPC returned but profile row still missing",
      [
        `user.id = ${user.id}`,
        `user.email = ${user.email}`,
        `rpcData = ${JSON.stringify(rpcData)}`,
        "",
        "This suggests the RPC INSERT did not commit. Possible causes:",
        "- handle_new_user trigger created a row with a different id",
        "- The auth.users.email doesn't match 'superadmin@admin.local'",
        "  (case sensitivity or whitespace?)",
        "- DB connection pool issue (very unlikely)",
      ].join("\n")
    );
  }

  // Use 303 See Other so browser does GET (not POST) on the redirect
  return NextResponse.redirect(new URL("/admin", siteBase()), 303);
}

export async function GET() {
  return handle();
}
export async function POST() {
  return handle();
}

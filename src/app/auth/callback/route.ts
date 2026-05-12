/**
 * Supabase Auth callback handler.
 *
 * Magic-link emails point users at /auth/callback?code=... after they click.
 * We exchange the code for a session cookie, then route them appropriately:
 *   - First-time sign-in or `next` param missing → /admin
 *   - With `next` param → that page (e.g. originating /admin/leads/X)
 *
 * Errors redirect to /admin/login with an error param.
 */
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/admin";

  if (!code) {
    return NextResponse.redirect(
      new URL("/admin/login?error=missing_code", req.url)
    );
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    const target = new URL("/admin/login", req.url);
    target.searchParams.set("error", "exchange_failed");
    return NextResponse.redirect(target);
  }

  return NextResponse.redirect(new URL(next, req.url));
}

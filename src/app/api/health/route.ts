/**
 * Lightweight health probe.
 *
 *   GET /api/health           → 200 if app is up
 *   GET /api/health?deep=1    → 200 only if Supabase reachable too
 *
 * Safe to expose publicly. Returns minimal info (no secrets).
 */
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const deep = url.searchParams.get("deep") === "1";

  const checks: Record<string, { ok: boolean; ms?: number; error?: string }> = {
    app: { ok: true },
  };

  if (deep) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl) {
      checks.supabase = { ok: false, error: "NEXT_PUBLIC_SUPABASE_URL not set" };
    } else {
      const start = Date.now();
      try {
        const res = await fetch(`${supabaseUrl}/auth/v1/health`, {
          method: "GET",
          signal: AbortSignal.timeout(5000),
        });
        checks.supabase = {
          ok: res.ok,
          ms: Date.now() - start,
          error: res.ok ? undefined : `HTTP ${res.status}`,
        };
      } catch (e) {
        checks.supabase = {
          ok: false,
          ms: Date.now() - start,
          error: e instanceof Error ? e.message : "unknown",
        };
      }
    }
  }

  const allOk = Object.values(checks).every((c) => c.ok);

  return NextResponse.json(
    {
      ok: allOk,
      timestamp: new Date().toISOString(),
      checks,
    },
    {
      status: allOk ? 200 : 503,
      headers: { "Cache-Control": "no-store" },
    }
  );
}

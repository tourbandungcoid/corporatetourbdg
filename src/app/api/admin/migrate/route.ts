/**
 * One-time migration runner.
 *
 * Applies all .sql files in supabase/migrations/ in name order.
 * Idempotent — uses CREATE IF NOT EXISTS / DROP IF EXISTS patterns
 * so re-running is safe.
 *
 * Auth: Bearer token via MIGRATION_SECRET env var.
 *   Example: GET /api/admin/migrate?token=YOUR_SECRET
 *
 * Required env vars:
 *   - DATABASE_URL: Postgres connection string from Supabase Dashboard
 *                    → Project Settings → Database → Connection string
 *                    Use the "Transaction pooler" or "Direct connection" string.
 *   - MIGRATION_SECRET: any random string you choose; you'll need it in the URL.
 *
 * Once DB is fully migrated, this route can be deleted.
 */
import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { readdir, readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs"; // pg is not Edge-compatible
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  const expected = process.env.MIGRATION_SECRET;

  if (!expected) {
    return NextResponse.json(
      {
        error: "MIGRATION_SECRET not set in environment. Add it in Vercel env vars first.",
      },
      { status: 500 }
    );
  }

  if (token !== expected) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return NextResponse.json(
      {
        error:
          "DATABASE_URL not set. Add the Postgres connection string from Supabase Dashboard → Settings → Database.",
      },
      { status: 500 }
    );
  }

  const migrationsDir = path.join(process.cwd(), "supabase", "migrations");

  let files: string[];
  try {
    files = (await readdir(migrationsDir))
      .filter((f) => f.endsWith(".sql"))
      .sort();
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to read migrations dir: ${message}` },
      { status: 500 }
    );
  }

  if (files.length === 0) {
    return NextResponse.json({
      ok: true,
      message: "No migration files found.",
    });
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }, // Supabase uses self-signed cert chain
  });

  const results: { file: string; status: "ok" | "error"; message?: string }[] = [];

  try {
    await client.connect();

    for (const file of files) {
      const sql = await readFile(path.join(migrationsDir, file), "utf-8");
      try {
        await client.query(sql);
        results.push({ file, status: "ok" });
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : "Unknown error";
        results.push({ file, status: "error", message });
        // Continue to next migration — if one already-applied step errors,
        // subsequent migrations might still work. User can review log.
      }
    }
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json(
      { error: `Connection failed: ${message}` },
      { status: 500 }
    );
  } finally {
    await client.end().catch(() => {});
  }

  const hasErrors = results.some((r) => r.status === "error");
  return NextResponse.json(
    {
      ok: !hasErrors,
      applied: results.filter((r) => r.status === "ok").map((r) => r.file),
      errors: results.filter((r) => r.status === "error"),
    },
    { status: hasErrors ? 207 : 200 }
  );
}

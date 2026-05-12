# Project Notes for Claude

## Supabase Project (CANONICAL)

**All database operations MUST target this project:**

- **Project ref:** `nqxdxiejnxfffwztkrpd`
- **URL:** `https://nqxdxiejnxfffwztkrpd.supabase.co`
- **Dashboard:** https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd
- **SQL Editor:** https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/sql/new

Do **not** run migrations, SQL, or schema changes against any other Supabase project, even if it appears in the MCP project list. If the Supabase MCP server does not currently have access to `nqxdxiejnxfffwztkrpd`, surface this to the user and ask them to reconnect the MCP integration to the correct organization — do not silently fall back to another project.

## Stack

- Next.js (App Router) + TypeScript
- Supabase (Postgres 17) for DB / auth / storage
- Vercel for hosting

## Key files

- `db/` — SQL migrations (run sequentially 01 → 05, see `db/README.md`)
- `src/lib/supabase/` — client / server / admin / middleware Supabase clients
- `.env.example` — env var template

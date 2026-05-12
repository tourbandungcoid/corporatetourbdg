# Project Notes for Claude

## Supabase Project (CANONICAL)

**All database operations MUST target this project:**

- **Project ref:** `nqxdxiejnxfffwztkrpd`
- **URL:** `https://nqxdxiejnxfffwztkrpd.supabase.co`
- **Dashboard:** https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd
- **SQL Editor:** https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/sql/new
- **Owner organization:** `tourbandungcoid's Org` (kept separate for billing/invoice isolation — do not propose transferring to another org)

### Workflow: MCP is NOT available for this project

The Supabase MCP server connected in this session belongs to a different organization (`Tourismlance-git's Supa`) and cannot see `nqxdxiejnxfffwztkrpd`. **Do not** run migrations, SQL, schema changes, or any `mcp__*supabase*` write/read operations against any project visible via MCP — those are different projects entirely.

For this repo, use the **manual SQL workflow**:

1. Write SQL into a new file under `db/` following the existing numbered convention (`db/01_*.sql` … `db/08_*.sql` already exist — next would be `db/09_*.sql`).
2. Commit the file to the branch.
3. Tell the user explicitly: "open https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/sql/new, paste the contents of `db/NN_xxx.sql`, click Run, paste the result back."
4. For ad-hoc inspection queries (e.g. checking `pg_policies`, `pg_tables`, RLS state) where no persistence is needed: it's fine to give the user a SQL snippet directly in chat instead of a file.
5. Wait for the user to paste back results before drawing conclusions about database state. Never assume a query succeeded.

If the user wants Claude to operate the DB directly, options are (a) transfer the project to `Tourismlance-git's Supa` (rejected — billing separation), or (b) setup a per-repo `.mcp.json` with a PAT scoped to `tourbandungcoid's Org` (not currently supported on Claude Code Web, which is what the user is on).

## Stack

- Next.js (App Router) + TypeScript
- Supabase (Postgres 17) for DB / auth / storage
- Vercel for hosting

## Key files

- `db/` — SQL migrations (run sequentially 01 → 05, see `db/README.md`)
- `src/lib/supabase/` — client / server / admin / middleware Supabase clients
- `.env.example` — env var template

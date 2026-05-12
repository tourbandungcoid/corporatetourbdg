# Project Notes for Claude

## Project

**`corporate.tourbandung.co.id`** — Unit specialized dari 7Summits Travel untuk B2B corporate outing, team building, dan executive offsite di Bandung & Jawa Barat.

## Stack

- **Frontend:** Next.js 15 (App Router, RSC, Server Actions) + TypeScript + Tailwind v4
- **Backend / DB:** Supabase (Postgres 17)
- **Auth:** Supabase Auth (magic link + Google OAuth — Phase 7)
- **Storage:** Supabase Storage (buckets: `media-public`, `media-private`)
- **Hosting:** Vercel
- **Versioning:** GitHub — `tourbandungcoid/corporatetourbdg`

## Supabase Project (CANONICAL)

**All database operations MUST target this project:**

- **Project ref:** `nqxdxiejnxfffwztkrpd`
- **URL:** `https://nqxdxiejnxfffwztkrpd.supabase.co`
- **Dashboard:** https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd
- **SQL Editor:** https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/sql/new
- **Owner organization:** `tourbandungcoid's Org` (kept separate for billing/invoice isolation — do not propose transferring to another org)
- **GitHub integration:** Connected, auto-deploy to production on push to `main` (path: `supabase/migrations/`)

### Workflow: MCP is NOT available for this project

The Supabase MCP server in this session is connected to a different organization (`Tourismlance-git's Supa`) and cannot see `nqxdxiejnxfffwztkrpd`. **Do not** run migrations, SQL, or `mcp__*supabase*` operations against any other project — those are different projects entirely.

Workflow for DB changes:
1. Write SQL into `supabase/migrations/<timestamp>_<name>.sql` (Supabase CLI convention — timestamp format `YYYYMMDDHHMMSS`).
2. Commit + push.
3. GitHub integration auto-applies migration to production on push to `main`.
4. For ad-hoc inspection queries (read-only): give the user a snippet to paste in SQL Editor; do not modify state speculatively.

If user wants Claude to operate the DB directly, options are (a) transfer the project to `Tourismlance-git's Supa` (rejected — billing separation), or (b) setup per-repo `.mcp.json` with a PAT scoped to `tourbandungcoid's Org` (not currently supported on Claude Code Web).

## Repository structure

```
/
├── src/
│   ├── app/                          (App Router routes)
│   ├── components/                   (Shared React components)
│   ├── lib/
│   │   ├── supabase/                 (client.ts, server.ts, middleware.ts, admin.ts)
│   │   └── utils/
│   ├── types/
│   └── middleware.ts                 (Auth guard for /admin)
│
├── supabase/
│   └── migrations/                   (SQL migrations — Supabase CLI convention)
│
├── public/
│   ├── images/                       (Real photos from Drive folder)
│   └── logo/
│
├── docs/
│   └── strategy.md                   (Phase 1-9 master strategy document)
│
└── CLAUDE.md                         (this file)
```

## Design tokens

Existing color palette at `src/app/globals.css` — **DO NOT major redesign warna**:

- `--color-ink`: `#0F1F1A` (primary text)
- `--color-brand`: `#6BA239` (primary brand green)
- `--color-brand-deep`: `#4E7E2A` (hover/deep brand)
- `--color-forest`: `#2E5C3E` (deep accents)
- `--color-warm`: `#B8924C` (warm accent — sparingly)
- `--color-bone`: `#FAFAF7` (background)
- `--color-paper`: `#FFFFFF` (cards)

Typography: Inter (sans) + Fraunces (display serif).

## Visual benchmark

[tourvia.framer.website](https://tourvia.framer.website/) — for premium feel, layout, whitespace. **Redesign, jangan copy mentah.**

## Brand voice

Gen-Z & Millennial friendly · Corporate tapi fun · Smart casual · Premium tapi approachable · Modern startup vibe · Human · Conversational. Target: **"Corporate Seru"**.

Avoid: terlalu formal, terlalu textbook, bahasa template agency.

## Strategy document

Phase 1-9 strategy lengkap di **`docs/strategy.md`**. Refer to this before making structural/scope decisions.

# Project Notes for Claude

## Project

**`corporate.tourbandung.co.id`** — Unit specialized dari 7Summits Travel untuk B2B corporate outing, team building, dan executive offsite di Bandung & Jawa Barat.

## Stack

- **Frontend:** Next.js 15 (App Router, RSC, Server Actions) + TypeScript + Tailwind v4
- **Backend / DB:** Supabase (Postgres 17)
- **Auth:** Supabase Auth (email + password). Bootstrap admin via `/api/admin/bootstrap-admin?secret=<token>` (env vars: `ADMIN_BOOTSTRAP_SECRET`, `ADMIN_BOOTSTRAP_EMAIL`, `ADMIN_BOOTSTRAP_PASSWORD`). After bootstrap, super_admin can invite additional users via `/admin/users`.
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

## Admin dashboard surfaces

- `/admin` — KPI cards, pipeline funnel, source breakdown, SLA breach alert, follow-ups due card, recent leads + cross-lead activity feed.
- `/admin/tasks` — combined inbox: SLA breaches, follow-ups due, unassigned hot/warm leads, stale proposals (>7d). TopBar shows live task badge.
- `/admin/leads` — list with search + priority/status/assigned/range filters, pagination (50/page with exact count), bulk select toolbar (status / assign for up to 200 leads), **Quick add lead** (sales call capture), CSV export.
- `/admin/leads/[id]` — header chips (status/priority/score/source/assigned), Quick actions (status update, assign, follow-up reminder with snooze presets, send 'Proposal Ready' email, add note), Possible duplicates card (matches by email/whatsapp/company), score breakdown, activity feed with resolved actor names.
- `/admin/activity` — cross-lead audit log with type filter + pagination.
- `/admin/users` — super_admin only — invite admin (auto-gen temp password shown once), role change, toggle active, reset password.
- `/admin/settings` — env var presence check, DB record counts, content data-file index, quick links.

## Public surfaces (Phase 2+)

- Money pages: `/outing-kantor-bandung`, `/team-building-bandung`, `/corporate-gathering-bandung`, `/employee-gathering-bandung`, `/outbound-perusahaan-bandung`, `/company-retreat-bandung`, `/villa-gathering-bandung`, `/glamping-corporate-bandung`, `/leadership-retreat-jawa-barat`, `/executive-offsite-bandung`.
- Hubs: `/services`, `/packages`, `/case-studies` (industry filter), `/insights` (category filter), `/faq` (4 categories).
- Trust/authority: `/team` (6 senior planner bios + Person schema), `/methodology` (3 named frameworks), `/pricing` (4-tier transparent breakdown), `/specialist-vs-generic-eo`, `/glossary` (40+ terms), `/about`, `/clients`.
- Funnel: `/proposal/request`, `/proposal/quick-quote`, `/proposal/book-consultation`, `/proposal/sample`, `/proposal/thank-you/[ref]`, `/proposal/track/[ref]` (client-facing live tracker).

## Generated routes (Next metadata)

- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`
- `/opengraph-image` (dynamic ImageResponse, 1200×630, brand)
- `/icon`, `/apple-icon` (dynamic ImageResponse)
- `/api/health` (shallow) · `/api/health?deep=1` (probes Supabase)
- `/api/admin/migrate` (auto-applies pending migrations via PG client)
- `/api/admin/bootstrap-admin` (one-shot admin bootstrap via env vars)
- `/api/admin/leads/export` (filtered CSV export — auth required)

## Data-driven content

Site content lives in TypeScript files (no CMS). Edit + commit + push to publish.
- Services: `src/lib/services-data.ts`
- Case studies: `src/lib/case-studies-data.ts`
- Insights: `src/lib/insights-data.ts`
- FAQ: `src/lib/faq-data.ts`
- Packages: `src/lib/packages-data.ts`
- Team: `src/lib/team-data.ts`
- Glossary: `src/lib/glossary-data.ts`
- Images: `src/lib/drive-images.ts`
- Site constants + contact: `src/lib/site.ts`

# DEPLOYMENT WORKFLOW — MANDATORY RULES

## My deployment flow (ALWAYS follow this):

1. I give instruction → You implement the changes
2. I ask for PR → You create a Pull Request
3. I merge manually → I will inform you "already merged"
4. I say DONE → Session complete
   OR I give revision → Go to Step 5

5. If I give revision → You implement the revision
6. After revision is done → ALWAYS create a NEW Pull Request automatically
7. I merge manually → I will inform you "already merged"
8. Repeat from Step 4

## CRITICAL RULE:
- NEVER assume deployment is complete after a merge
- After ANY revision, ALWAYS create a new PR without waiting to be asked
- Wait for my "DONE" confirmation before considering the task finished
- Do NOT push directly to main/master branch

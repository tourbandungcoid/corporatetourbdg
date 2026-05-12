# 7Summits OS — Database Migrations

Postgres schema for the 7Summits OS (internal CMS + corporate operating system).

**Stack:** Supabase (Postgres 17) — project ref `nqxdxiejnxfffwztkrpd`

## Migration Files

Run in order. Each is idempotent within itself but **must be run sequentially** (later migrations reference tables/types created earlier).

| # | File | Adds |
|---|------|------|
| 01 | `01_foundation.sql` | Extensions (uuid, pgcrypto, citext, pg_trgm), audit log infrastructure, universal `updated_at` trigger |
| 02 | `02_profiles_and_roles.sql` | `profiles` table, `user_role` enum (5 roles), RBAC helper functions, auto-create profile on signup |
| 03 | `03_media_and_site_settings.sql` | `media_library`, `site_settings` (singleton with default values) |
| 04 | `04_content_core.sql` | `services`, `programs`, `case_studies`, `testimonials`, `faqs`, `client_logos` |
| 05 | `05_leads_and_proposals.sql` | `leads` (with auto-scoring), `lead_activities`, `proposals`, `proposal_line_items` |

## How to Run

### Path A — Supabase SQL Editor (manual, recommended for first run)

1. Open https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/sql/new
2. For each migration file (in order 01 → 05):
   - Open the file in this repo
   - Copy entire contents
   - Paste into SQL Editor
   - Click **Run** (or Cmd/Ctrl + Enter)
   - Verify success (should say "Success" with no errors)
   - Move to next file
3. After all 5 done, verify via **Table Editor** — should see ~13 tables: `profiles`, `audit_log`, `site_settings`, `media_library`, `services`, `programs`, `case_studies`, `testimonials`, `faqs`, `client_logos`, `leads`, `lead_activities`, `proposals`, `proposal_line_items`

### Path B — Supabase CLI (for power users / future automation)

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Login
supabase login

# Link project
supabase link --project-ref nqxdxiejnxfffwztkrpd

# Apply migrations
supabase db push
```

## Post-Migration Setup

### 1. Create First Admin User

After running all migrations, create the first super_admin user:

```sql
-- Run in SQL Editor after creating user via Auth → Users
UPDATE public.profiles
SET role = 'super_admin', full_name = 'Andini Pratama'
WHERE email = 'your-admin-email@yourcompany.com';
```

To create the user account:
1. Go to **Authentication → Users** in Supabase Dashboard
2. Click **Add User** → **Create new user**
3. Enter email + password, set "Auto Confirm User" = true
4. Note the user ID, then run the UPDATE above

### 2. Configure Storage Buckets

In **Storage** dashboard, create these buckets:
- `media-public` (public read, admin upload) — for website photos
- `media-private` (admin only) — for proposals, contracts, internal docs

Storage policies will be added in migration 06 (future).

### 3. Set Up Environment Variables

In Next.js `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://nqxdxiejnxfffwztkrpd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_anon_key>
SUPABASE_SERVICE_ROLE_KEY=<your_service_role_key>
```

Keys available at: https://supabase.com/dashboard/project/nqxdxiejnxfffwztkrpd/settings/api

For Vercel: add the same env vars in Vercel project settings.

## Schema Architecture Highlights

**Patterns used consistently across tables:**
- UUID primary keys (web-safe, distributed-friendly)
- `created_at` / `updated_at` / `created_by` / `updated_by` audit columns
- `deleted_at` soft delete (no hard deletes)
- `status` enum (`draft` / `published` / `archived`)
- `display_order` int for sortable items
- `slug` unique-per-active for SEO-friendly URLs
- JSONB columns for flexible structured content (pricing tiers, itineraries, etc.)
- Row-level security (RLS) enabled on every table
- Audit logging via trigger on every mutation

**5 user roles:**
- `super_admin` — full access
- `content_admin` — content modules only
- `sales_admin` — leads + proposals + view content
- `marketing_admin` — content + view leads/analytics
- `viewer` — read-only

**Public form submissions** (no auth required): `leads` table allows INSERT from unauthenticated users — for RFP form, quick quote, etc. All other tables require admin auth for writes.

## Adding New Modules (Future)

To add a new module (e.g., `vendors`, `events`, `customer_accounts`):
1. Create new migration file `06_vendors.sql` (next number)
2. Follow the universal pattern (audit fields, RLS, triggers)
3. Run via SQL Editor
4. Generate fresh TypeScript types: `npx supabase gen types typescript --project-id nqxdxiejnxfffwztkrpd > src/types/supabase.ts`

## Troubleshooting

**"relation already exists"** — table was created in a previous run. If you need to start fresh:
```sql
-- DANGER: drops everything in public schema
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
```

**"function does not exist"** — usually means a prior migration didn't run. Migrations are sequential.

**"permission denied"** — likely means you're running as non-postgres user. Use Supabase Dashboard SQL Editor (runs as postgres) or `supabase db push`.

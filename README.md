# Tour Bandung Corporate

B2B corporate outing, team building, and executive offsite — Bandung & Jawa Barat.

Live site (production): `https://corporate.tourbandung.co.id`

## Stack

- Next.js 15 (App Router, TypeScript, Tailwind v4)
- Supabase (Postgres 17, Auth, Storage)
- Vercel (hosting)

## Quick start

```bash
# Install dependencies
npm install

# Setup env
cp .env.example .env.local
# Edit .env.local with Supabase keys from dashboard

# Run dev server
npm run dev
```

## Documentation

- **Strategy (Phase 1-9):** [`docs/strategy.md`](docs/strategy.md)
- **Claude operating notes:** [`CLAUDE.md`](CLAUDE.md)

## Database migrations

Migrations live in `supabase/migrations/` (Supabase CLI convention — timestamp prefix).

GitHub integration auto-applies migrations on push to `main`. For local dev / preview, use Supabase CLI:

```bash
supabase link --project-ref nqxdxiejnxfffwztkrpd
supabase db push
```

## License

Proprietary — Tour Bandung Corporate / 7Summits Travel

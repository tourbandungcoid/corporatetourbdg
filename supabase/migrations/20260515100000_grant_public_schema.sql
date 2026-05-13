-- =====================================================================
-- 20260515100000 — Grant public schema privileges
-- =====================================================================
-- Foundation migration created tables via raw SQL, which does NOT
-- auto-grant table-level privileges to the Supabase auth roles
-- (anon, authenticated, service_role). RLS still gates row access,
-- but Postgres rejects the query at table level before RLS evaluates,
-- producing "permission denied for table <X>" errors site-wide.
--
-- This migration:
--   1. Grants schema USAGE
--   2. Grants table-level CRUD to authenticated (filtered by RLS)
--   3. Grants table-level SELECT to anon (filtered by RLS)
--   4. Grants ALL to service_role (admin client bypass)
--   5. Sets default privileges so future tables auto-grant
--   6. Grants sequence access (for serial PKs)
--   7. Grants EXECUTE on functions
--
-- Idempotent — safe to re-run.
-- =====================================================================

-- 1. Schema usage
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

-- 2-4. Existing tables
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

-- 5. Default privileges — tables created in the future auto-inherit
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT SELECT ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT ALL ON TABLES TO service_role;

-- 6. Sequences (for SERIAL / BIGSERIAL columns and nextval())
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT ALL ON SEQUENCES TO service_role;

-- 7. Functions (RPCs, SECURITY DEFINER helpers, etc.)
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT EXECUTE ON FUNCTIONS TO authenticated, service_role;

DO $$ BEGIN
  RAISE NOTICE 'Public schema GRANTs applied to anon / authenticated / service_role.';
END $$;

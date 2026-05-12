-- =====================================================================
-- 7Summits OS — Migration 07: Fix Anon Permissions for Lead Capture
-- =====================================================================
-- After migration 05 was applied, public form submissions failed with
-- 42501 (permission denied) because anon role lacked:
--   1. USAGE on the lead_number_seq (default-value generator)
--   2. Explicit INSERT grant (RLS policy alone wasn't enough)
--
-- This migration adds the missing grants. Idempotent — safe to re-run.
-- =====================================================================

-- Sequence usage for auto-generated lead_number / proposal_number
GRANT USAGE ON SEQUENCE public.lead_number_seq TO anon, authenticated;
GRANT USAGE ON SEQUENCE public.proposal_number_seq TO anon, authenticated;

-- Mark generators as SECURITY DEFINER so they run with postgres privileges
ALTER FUNCTION public.generate_lead_number() SECURITY DEFINER;
ALTER FUNCTION public.generate_proposal_number() SECURITY DEFINER;

-- Explicit table-level grants (in addition to RLS policy)
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT ON public.leads TO anon;  -- needed because INSERT...RETURNING needs SELECT

-- Verify
DO $$
DECLARE
  has_grant BOOLEAN;
BEGIN
  SELECT EXISTS(
    SELECT 1 FROM information_schema.table_privileges
    WHERE grantee = 'anon'
      AND table_schema = 'public'
      AND table_name = 'leads'
      AND privilege_type = 'INSERT'
  ) INTO has_grant;

  IF NOT has_grant THEN
    RAISE EXCEPTION 'anon INSERT grant on leads still missing after migration';
  END IF;

  RAISE NOTICE '✓ anon INSERT permission on leads verified';
END $$;

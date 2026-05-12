-- =====================================================================
-- 7Summits OS — Migration 08: Fix leads RLS policies (explicit roles)
-- =====================================================================
-- Issue: After migration 05, anon INSERT on leads failed with
-- "new row violates row-level security policy". Root cause was the
-- original policy did not explicitly target the anon role.
--
-- This migration: drop & recreate all RLS policies on leads + lead_activities
-- with explicit TO clause.
-- =====================================================================

DROP POLICY IF EXISTS "Anyone can submit lead" ON public.leads;
DROP POLICY IF EXISTS "Sales reads leads" ON public.leads;
DROP POLICY IF EXISTS "Sales updates leads" ON public.leads;
DROP POLICY IF EXISTS "Super admin deletes leads" ON public.leads;

CREATE POLICY "anon_insert_leads" ON public.leads
  AS PERMISSIVE
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "sales_select_leads" ON public.leads
  AS PERMISSIVE
  FOR SELECT
  TO authenticated
  USING (public.can_view_leads());

CREATE POLICY "sales_update_leads" ON public.leads
  AS PERMISSIVE
  FOR UPDATE
  TO authenticated
  USING (public.can_edit_leads())
  WITH CHECK (public.can_edit_leads());

CREATE POLICY "super_admin_delete_leads" ON public.leads
  AS PERMISSIVE
  FOR DELETE
  TO authenticated
  USING (public.current_user_role() = 'super_admin');

DROP POLICY IF EXISTS "Sales reads lead activities" ON public.lead_activities;
DROP POLICY IF EXISTS "Sales manages lead activities" ON public.lead_activities;

CREATE POLICY "sales_select_lead_activities" ON public.lead_activities
  AS PERMISSIVE
  FOR SELECT
  TO authenticated
  USING (public.can_view_leads());

CREATE POLICY "sales_insert_lead_activities" ON public.lead_activities
  AS PERMISSIVE
  FOR INSERT
  TO authenticated
  WITH CHECK (public.can_edit_leads());

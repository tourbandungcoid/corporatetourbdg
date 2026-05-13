-- ---------------------------------------------------------------------
-- Function: repair_superadmin_profile()
-- ---------------------------------------------------------------------
-- SECURITY DEFINER helper invoked by /api/admin/repair-superadmin.
-- Lets a logged-in user repair their own profile row when:
--   - handle_new_user trigger failed to fire
--   - SUPABASE_SERVICE_ROLE_KEY is misconfigured in Vercel env, so the
--     admin client can't bypass RLS
--
-- Only the canonical bootstrap account (superadmin@admin.local) can
-- promote itself this way. Other callers get an exception.
-- ---------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.repair_superadmin_profile()
RETURNS public.profiles
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp
AS $$
DECLARE
  caller_id      UUID := auth.uid();
  caller_email   TEXT;
  caller_name    TEXT;
  resulting_row  public.profiles;
BEGIN
  IF caller_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT email, COALESCE(raw_user_meta_data->>'full_name', 'Super Admin')
    INTO caller_email, caller_name
  FROM auth.users
  WHERE id = caller_id;

  IF caller_email IS NULL THEN
    RAISE EXCEPTION 'Auth user not found';
  END IF;

  IF caller_email <> 'superadmin@admin.local' THEN
    RAISE EXCEPTION 'Only the bootstrap superadmin account can self-repair';
  END IF;

  INSERT INTO public.profiles (id, email, full_name, role, is_active)
  VALUES (caller_id, caller_email, caller_name, 'super_admin', TRUE)
  ON CONFLICT (id) DO UPDATE SET
    role = 'super_admin',
    is_active = TRUE,
    full_name = EXCLUDED.full_name
  RETURNING * INTO resulting_row;

  RETURN resulting_row;
END;
$$;

GRANT EXECUTE ON FUNCTION public.repair_superadmin_profile() TO authenticated;

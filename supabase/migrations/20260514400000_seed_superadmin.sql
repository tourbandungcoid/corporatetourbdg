-- ---------------------------------------------------------------------
-- Migration: Seed the superadmin user
-- ---------------------------------------------------------------------
-- Creates a single bootstrap super_admin account so the team can log in
-- to /admin/login immediately after deploy without env-var setup.
--
-- Login credentials (intentional, change password from /admin/users
-- after first login):
--   email:    superadmin@admin.local
--   password: superadmin777
--   role:     super_admin
--
-- LoginForm auto-appends '@admin.local' if the user input has no '@',
-- so user can type 'superadmin' as the username.
--
-- Idempotent — does nothing if the user already exists.
-- ---------------------------------------------------------------------

DO $$
DECLARE
  superadmin_email TEXT  := 'superadmin@admin.local';
  superadmin_pw    TEXT  := 'superadmin777';
  new_user_id      UUID;
BEGIN
  -- Skip if already exists
  IF EXISTS (SELECT 1 FROM auth.users WHERE email = superadmin_email) THEN
    -- Make sure the existing user has super_admin role + is active
    UPDATE public.profiles
    SET role = 'super_admin', is_active = TRUE
    WHERE email = superadmin_email;
    RETURN;
  END IF;

  new_user_id := gen_random_uuid();

  -- 1. Insert into auth.users with bcrypt-hashed password
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    recovery_token,
    email_change_token_new,
    email_change
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    new_user_id,
    'authenticated',
    'authenticated',
    superadmin_email,
    crypt(superadmin_pw, gen_salt('bf')),
    NOW(),
    '{"provider":"email","providers":["email"]}'::jsonb,
    '{"full_name":"Super Admin"}'::jsonb,
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  );

  -- 2. Insert into auth.identities (required for email/password sign-in
  --    on Supabase Auth >= v2.46)
  INSERT INTO auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    provider_id,
    last_sign_in_at,
    created_at,
    updated_at
  ) VALUES (
    gen_random_uuid(),
    new_user_id,
    jsonb_build_object(
      'sub', new_user_id::text,
      'email', superadmin_email,
      'email_verified', true
    ),
    'email',
    new_user_id::text,
    NOW(),
    NOW(),
    NOW()
  );

  -- 3. handle_new_user trigger already inserted a row into public.profiles.
  --    Promote it to super_admin so the user can access /admin.
  UPDATE public.profiles
  SET role = 'super_admin', is_active = TRUE, full_name = 'Super Admin'
  WHERE id = new_user_id;

  -- Defensive: if the trigger didn't fire for any reason, upsert here.
  INSERT INTO public.profiles (id, email, full_name, role, is_active)
  VALUES (new_user_id, superadmin_email, 'Super Admin', 'super_admin', TRUE)
  ON CONFLICT (id) DO NOTHING;
END $$;

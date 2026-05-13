-- =====================================================================
-- 20260515300000 — Client Logos
-- =====================================================================
-- Stores uploaded client logos to render in the homepage TrustBar
-- marquee. Logos live in Supabase Storage bucket `media-public`;
-- this table tracks the row metadata + storage path.
-- =====================================================================

CREATE TABLE IF NOT EXISTS public.client_logos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  logo_url        TEXT NOT NULL,
  logo_path       TEXT,
  website_url     TEXT,
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  display_order   INT NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by      UUID REFERENCES public.profiles(id),
  updated_by      UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_client_logos_active_order
  ON public.client_logos(display_order) WHERE is_active = TRUE;

DROP TRIGGER IF EXISTS set_client_logos_updated_at ON public.client_logos;
CREATE TRIGGER set_client_logos_updated_at BEFORE UPDATE ON public.client_logos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "client_logos_public_read" ON public.client_logos;
CREATE POLICY "client_logos_public_read" ON public.client_logos
  FOR SELECT TO anon, authenticated
  USING (is_active = TRUE);

DROP POLICY IF EXISTS "client_logos_admin_all" ON public.client_logos;
CREATE POLICY "client_logos_admin_all" ON public.client_logos
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

GRANT SELECT ON public.client_logos TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.client_logos TO authenticated;
GRANT ALL ON public.client_logos TO service_role;

-- ---------------------------------------------------------------------
-- Storage bucket: media-public
-- ---------------------------------------------------------------------
-- Ensure the bucket exists (idempotent — does nothing if it's already
-- created via Supabase dashboard).
INSERT INTO storage.buckets (id, name, public)
VALUES ('media-public', 'media-public', TRUE)
ON CONFLICT (id) DO UPDATE SET public = TRUE;

-- Public read on objects in media-public (so logo URLs work without auth)
DROP POLICY IF EXISTS "media_public_objects_read" ON storage.objects;
CREATE POLICY "media_public_objects_read" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'media-public');

-- Authenticated admin can write to media-public (uploads go through the
-- service-role admin client on the server, but we add this for
-- defense-in-depth in case any future flow uses the user-session client).
DROP POLICY IF EXISTS "media_public_admin_write" ON storage.objects;
CREATE POLICY "media_public_admin_write" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'media-public'
    AND public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin')
  );

DROP POLICY IF EXISTS "media_public_admin_update" ON storage.objects;
CREATE POLICY "media_public_admin_update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (
    bucket_id = 'media-public'
    AND public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin')
  );

DROP POLICY IF EXISTS "media_public_admin_delete" ON storage.objects;
CREATE POLICY "media_public_admin_delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'media-public'
    AND public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin')
  );

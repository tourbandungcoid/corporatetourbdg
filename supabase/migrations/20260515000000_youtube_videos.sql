-- ---------------------------------------------------------------------
-- Migration: YouTube Videos (Module 4)
-- ---------------------------------------------------------------------
-- Stores YouTube video links to render in a "Dari channel kami" section
-- on the public homepage (below WHAT WE DO / Services).
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.youtube_videos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  youtube_url     TEXT NOT NULL,
  youtube_id      TEXT NOT NULL,
  title           TEXT,
  description     TEXT,
  thumbnail_url   TEXT,
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  display_order   INT NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by      UUID REFERENCES public.profiles(id),
  updated_by      UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_youtube_videos_active_order
  ON public.youtube_videos(display_order) WHERE is_active = TRUE;

DROP TRIGGER IF EXISTS set_youtube_videos_updated_at ON public.youtube_videos;
CREATE TRIGGER set_youtube_videos_updated_at BEFORE UPDATE ON public.youtube_videos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.youtube_videos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "youtube_videos_public_read" ON public.youtube_videos;
CREATE POLICY "youtube_videos_public_read" ON public.youtube_videos
  FOR SELECT TO anon, authenticated
  USING (is_active = TRUE);

DROP POLICY IF EXISTS "youtube_videos_admin_all" ON public.youtube_videos;
CREATE POLICY "youtube_videos_admin_all" ON public.youtube_videos
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

-- Explicit grants (the schema-wide grant migration covers these too, but
-- declaring here makes the table self-contained for fresh environments).
GRANT SELECT ON public.youtube_videos TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.youtube_videos TO authenticated;
GRANT ALL ON public.youtube_videos TO service_role;

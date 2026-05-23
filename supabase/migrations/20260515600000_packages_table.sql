-- Packages CMS table — DB overlay on top of static packages-data.ts
-- A row here overrides the matching static entry; absent slugs fall back to static.
CREATE TABLE IF NOT EXISTS public.packages (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            text        NOT NULL UNIQUE,
  title           text,
  subtitle        text,
  description     text,
  pax_range       text,
  duration        text,
  vibe_tags       jsonb       DEFAULT '[]',
  starting_price  text,
  price_numeric   numeric,
  inclusions      jsonb       DEFAULT '[]',
  featured        boolean,
  service_slug    text,
  hero_image_url  text,
  hero_image_alt  text,
  updated_at      timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "packages_select_all" ON public.packages FOR SELECT USING (true);
CREATE POLICY "packages_write_auth" ON public.packages FOR ALL TO authenticated USING (true) WITH CHECK (true);

GRANT SELECT ON public.packages TO anon;
GRANT ALL    ON public.packages TO authenticated;

-- Services CMS table — DB overlay on top of static services-data.ts
CREATE TABLE IF NOT EXISTS public.services (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             text        NOT NULL UNIQUE,
  title            text,
  eyebrow          text,
  hero_description text,
  hero_image_url   text,
  hero_image_alt   text,
  meta_description text,
  pax_range        text,
  duration_options jsonb       DEFAULT '[]',
  price_from       text,
  vibe_tags        jsonb       DEFAULT '[]',
  inclusions       jsonb       DEFAULT '[]',
  samples          jsonb       DEFAULT '[]',
  process_steps    jsonb       DEFAULT '[]',
  faqs             jsonb       DEFAULT '[]',
  updated_at       timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "services_select_all" ON public.services FOR SELECT USING (true);
CREATE POLICY "services_write_auth" ON public.services FOR ALL TO authenticated USING (true) WITH CHECK (true);

GRANT SELECT ON public.services TO anon;
GRANT ALL    ON public.services TO authenticated;

-- Add logo carousel settings to brand_settings singleton
ALTER TABLE public.brand_settings
  ADD COLUMN IF NOT EXISTS logo_carousel_speed  integer NOT NULL DEFAULT 35,
  ADD COLUMN IF NOT EXISTS logo_carousel_swipe  boolean NOT NULL DEFAULT false;

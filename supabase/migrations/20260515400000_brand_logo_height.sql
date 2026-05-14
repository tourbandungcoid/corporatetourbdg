-- Add logo_height_nav to brand_settings so admins can control navbar logo size
-- without a code change. Default 48px matches the current hardcoded value.
ALTER TABLE public.brand_settings
  ADD COLUMN IF NOT EXISTS logo_height_nav integer NOT NULL DEFAULT 48;

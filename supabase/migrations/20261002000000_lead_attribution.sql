-- =====================================================================
-- 20261002000000 — Lead attribution (first-touch + converting page)
-- =====================================================================
-- Captures where a lead came from so marketing can measure which
-- channel, campaign, article and money page actually produce leads.
--
-- Populated by the public lead forms from the `tb_attr` / `tb_lc`
-- cookies set by <AttributionTracker /> on the client.
--   landing_page     first page of the first visit (path + query)
--   conversion_page  last content page viewed before the form
--   channel          derived bucket: Paid Search, Organic Search,
--                    Paid Social, Social, Email, Referral, Direct, ...
--   referrer         (column already exists — now actually filled)
-- Idempotent — safe to re-run.
-- =====================================================================

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS landing_page     TEXT,
  ADD COLUMN IF NOT EXISTS conversion_page  TEXT,
  ADD COLUMN IF NOT EXISTS channel          TEXT,
  ADD COLUMN IF NOT EXISTS utm_source       TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium       TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign     TEXT,
  ADD COLUMN IF NOT EXISTS utm_term         TEXT,
  ADD COLUMN IF NOT EXISTS utm_content      TEXT,
  ADD COLUMN IF NOT EXISTS gclid            TEXT,
  ADD COLUMN IF NOT EXISTS fbclid           TEXT,
  ADD COLUMN IF NOT EXISTS first_visit_at   TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS leads_channel_idx
  ON public.leads (channel) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS leads_conversion_page_idx
  ON public.leads (conversion_page) WHERE deleted_at IS NULL;

NOTIFY pgrst, 'reload schema';

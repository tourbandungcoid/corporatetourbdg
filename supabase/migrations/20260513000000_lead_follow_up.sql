-- ---------------------------------------------------------------------
-- Migration: lead follow-up reminders
-- ---------------------------------------------------------------------
-- Adds a `follow_up_at` timestamp to leads so sales can schedule a
-- reminder ("snooze until tomorrow", "check back next Monday").
-- Dashboard surfaces leads where follow_up_at <= NOW().
-- ---------------------------------------------------------------------

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS follow_up_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_leads_follow_up_at
  ON public.leads(follow_up_at)
  WHERE follow_up_at IS NOT NULL AND deleted_at IS NULL;

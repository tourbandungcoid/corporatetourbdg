-- =====================================================================
-- 20260528000000 — Email nurture sequence tracking
-- =====================================================================
-- Tracks which leads have received which nurture emails.
-- Enables scheduling and prevents duplicate sends.
-- =====================================================================

CREATE TABLE IF NOT EXISTS public.email_nurture_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,

  template_id TEXT NOT NULL,
  days_since_capture INT NOT NULL,

  scheduled_for TIMESTAMPTZ NOT NULL,
  sent_at TIMESTAMPTZ,
  failed_at TIMESTAMPTZ,
  error_message TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_nurture_lead ON public.email_nurture_sends(lead_id);
CREATE INDEX IF NOT EXISTS idx_email_nurture_template ON public.email_nurture_sends(template_id);
CREATE INDEX IF NOT EXISTS idx_email_nurture_scheduled ON public.email_nurture_sends(scheduled_for)
  WHERE sent_at IS NULL AND failed_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_email_nurture_sent ON public.email_nurture_sends(sent_at);

DROP TRIGGER IF EXISTS set_email_nurture_updated_at ON public.email_nurture_sends;
CREATE TRIGGER set_email_nurture_updated_at BEFORE UPDATE ON public.email_nurture_sends
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Function to schedule nurture emails for a newly captured lead
CREATE OR REPLACE FUNCTION public.schedule_nurture_emails(p_lead_id UUID)
RETURNS VOID LANGUAGE plpgsql AS $$
DECLARE
  v_lead RECORD;
  v_capture_time TIMESTAMPTZ;
  v_schedule_times TIMESTAMPTZ[] := ARRAY[]::TIMESTAMPTZ[];
  v_template_ids TEXT[] := ARRAY['welcome-day0', 'casestudy-day3', 'roi-calculator-day7', 'social-proof-day14'];
  v_days INT[] := ARRAY[0, 3, 7, 14];
  i INT;
BEGIN
  -- Fetch lead
  SELECT * INTO v_lead FROM public.leads WHERE id = p_lead_id;
  IF v_lead IS NULL THEN
    RETURN;
  END IF;

  v_capture_time := v_lead.created_at;

  -- Schedule emails for each template
  FOR i IN 1..array_length(v_template_ids, 1) LOOP
    INSERT INTO public.email_nurture_sends (lead_id, template_id, days_since_capture, scheduled_for)
    VALUES (
      p_lead_id,
      v_template_ids[i],
      v_days[i],
      v_capture_time + (v_days[i] || ' days')::INTERVAL
    )
    ON CONFLICT DO NOTHING;
  END LOOP;
END;
$$;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON public.email_nurture_sends TO anon, authenticated;

-- =====================================================================
-- 7Summits OS — Migration 01: Foundation
-- Extensions, helper functions, audit infrastructure
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS moddatetime;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS btree_gin;
CREATE EXTENSION IF NOT EXISTS citext;

-- Updated_at + updated_by trigger
CREATE OR REPLACE FUNCTION public.set_updated_metadata()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := now();
  IF auth.uid() IS NOT NULL THEN
    NEW.updated_by := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Audit log table
CREATE TABLE public.audit_log (
  id BIGSERIAL PRIMARY KEY,
  table_name TEXT NOT NULL,
  record_id TEXT NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  changed_fields JSONB,
  old_data JSONB,
  new_data JSONB,
  performed_by UUID,
  performed_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_audit_log_table_record ON public.audit_log(table_name, record_id);
CREATE INDEX idx_audit_log_performed_by ON public.audit_log(performed_by);
CREATE INDEX idx_audit_log_performed_at ON public.audit_log(performed_at DESC);

-- Generic audit trigger
CREATE OR REPLACE FUNCTION public.log_audit_event()
RETURNS TRIGGER AS $$
DECLARE
  changed JSONB;
  record_id_value TEXT;
BEGIN
  IF TG_OP = 'DELETE' THEN
    record_id_value := COALESCE((OLD.id)::TEXT, NULL);
    INSERT INTO public.audit_log(table_name, record_id, action, old_data, performed_by)
    VALUES (TG_TABLE_NAME, record_id_value, 'DELETE', to_jsonb(OLD), auth.uid());
    RETURN OLD;
  ELSIF TG_OP = 'INSERT' THEN
    record_id_value := COALESCE((NEW.id)::TEXT, NULL);
    INSERT INTO public.audit_log(table_name, record_id, action, new_data, performed_by)
    VALUES (TG_TABLE_NAME, record_id_value, 'INSERT', to_jsonb(NEW), auth.uid());
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    record_id_value := COALESCE((NEW.id)::TEXT, NULL);
    IF to_jsonb(OLD) IS DISTINCT FROM to_jsonb(NEW) THEN
      changed := (SELECT jsonb_object_agg(key, value)
                  FROM jsonb_each(to_jsonb(NEW))
                  WHERE to_jsonb(NEW) -> key IS DISTINCT FROM to_jsonb(OLD) -> key);
      INSERT INTO public.audit_log(table_name, record_id, action, changed_fields, old_data, new_data, performed_by)
      VALUES (TG_TABLE_NAME, record_id_value, 'UPDATE', changed, to_jsonb(OLD), to_jsonb(NEW), auth.uid());
    END IF;
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

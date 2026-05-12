/**
 * Supabase service-role client — bypasses RLS.
 *
 * ⚠️ SERVER-SIDE ONLY. Never import in Client Components.
 * Use only for:
 *   - Admin operations that need to bypass RLS (e.g. promoting a user role)
 *   - Background jobs / cron / API webhooks
 *   - Initial data seeding scripts
 *
 * For regular admin actions, use server.ts which respects RLS for the
 * authenticated admin user.
 */
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}

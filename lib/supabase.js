import { createClient } from "@supabase/supabase-js";

// This client is used ONLY in server-side code (API routes).
// It uses the service role key, which bypasses Row Level Security —
// that key must NEVER be exposed to the browser or committed to the repo.
// It's set as an environment variable directly in the Vercel dashboard.
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

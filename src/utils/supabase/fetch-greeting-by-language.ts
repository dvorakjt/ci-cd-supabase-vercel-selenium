import "server-only";
import { createClient } from "@supabase/supabase-js";
import { readPrivateEnvVars } from "../environment/read-private-env-vars";
import type { Greeting } from "@/model/greeting";

export async function fetchGreetingByLanguage(language: string) {
  const envVars = readPrivateEnvVars();
  const client = createClient(
    envVars.SUPABASE_API_URL,
    envVars.SUPABASE_SERVICE_ROLE_KEY
  );

  const record = await client
    .from("greetings")
    .select()
    .eq("language", language)
    .maybeSingle<Greeting>();

  return record.data;
}

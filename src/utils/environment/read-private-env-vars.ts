import "server-only";
import { z } from "zod";

export function readPrivateEnvVars() {
  const envSchema = z.object({
    SUPABASE_API_URL: envVariableSchema("SUPABASE_API_URL"),
    SUPABASE_SERVICE_ROLE_KEY: envVariableSchema("SUPABASE_SERVICE_ROLE_KEY"),
  });

  return envSchema.parse(process.env);
}

function envVariableSchema(variableName: string) {
  return z.string({
    required_error: `Environment variable "${variableName}" was undefined. Did you add it to your environment?`,
  });
}

import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  APP_NAME: z.string(),
  APP_ENV: z.enum(["dev", "test", "prod"]),
  APP_PORT: z.coerce.number(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASS: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.coerce.number(),
  POSTGRES_NAME: z.string(),
});

const _env = schema.safeParse(process.env);

if (!_env.success) {
  console.error(_env.error.format());

  throw new Error("Invalid environment variables.");
}

export const env = _env.data;

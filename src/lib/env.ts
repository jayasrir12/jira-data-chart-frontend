import { z } from "zod";

export const envSchema = z.object({
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),
});

export const env = envSchema.parse(process.env);

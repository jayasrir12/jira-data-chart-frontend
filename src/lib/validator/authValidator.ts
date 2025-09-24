import z from "zod";

export const registerValidationSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100),
});

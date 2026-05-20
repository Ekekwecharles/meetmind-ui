import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Email address is required").trim(),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

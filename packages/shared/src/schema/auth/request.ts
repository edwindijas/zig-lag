import { z } from 'zod';

export const signupRequestSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  company: z.string().min(2).optional(),
  name: z.string().min(2),
});

export const loginRequestSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type SignupRequest = z.infer<typeof signupRequestSchema>;
export type LoginRequest = z.infer<typeof loginRequestSchema>;

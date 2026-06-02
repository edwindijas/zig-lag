import { z } from 'zod';

export const authSigninRequestSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(8),
  }),
});

export type AuthSigninRequest = z.infer<typeof authSigninRequestSchema>;

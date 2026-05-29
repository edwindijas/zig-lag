import { z } from 'zod';

export * from './request';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
});

export type User = z.infer<typeof userSchema>;

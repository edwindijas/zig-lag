import { z } from 'zod';

import { protectedUserSchema } from '../user';

export const authWhoamiResponseSchema = z.object({
  user: protectedUserSchema.nullable(),
});

export type AuthWhoamiResponse = z.infer<typeof authWhoamiResponseSchema>;

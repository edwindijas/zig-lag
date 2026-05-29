import { eq } from 'drizzle-orm';

import { db } from '@/common/db/client';

import { NewUser, User, users } from './schema';

export const findByEmail = async (email: string): Promise<User | null> => {
  const results = await db.select().from(users).where(eq(users.email, email));
  return results[0] ?? null;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<NewUser> => {
  const results = await db.insert(users).values(user).returning();
  return results[0];
};

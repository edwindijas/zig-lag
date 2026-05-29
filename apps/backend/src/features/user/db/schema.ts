import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  company: text('company'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type User = InferSelectModel<typeof users>;

export type NewUser = InferInsertModel<typeof users>;

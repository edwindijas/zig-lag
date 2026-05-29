import { defineConfig } from 'drizzle-kit';

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  schema: './src/common/db/schema.ts',

  out: './drizzle',

  dialect: 'postgresql',

  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

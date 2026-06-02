import 'dotenv/config';
import { getEnvVariable } from '@pack/shared/src/helpers/config/env';
import { createClient } from 'redis';

import { CONFIG_ENV_VAR_NAMES } from '@/src/common/const/config';

export const redisClient = createClient({
  url: getEnvVariable(CONFIG_ENV_VAR_NAMES.REDIS_URL),
});

// eslint-disable-next-line no-console
redisClient.on('error', (err) => console.error('Redis Client Error', err));

await redisClient.connect();

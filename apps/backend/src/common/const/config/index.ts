import { arrayToEnum } from '@pack/shared/src/helpers/misc/types';

export const CONFIG_ENV_VAR_NAMES = arrayToEnum([
  'SERVER_PORT',
  'SERVER_HOST',
  'CORS_ORIGIN',
  'DATABASE_URL',
  'REDIS_URL',
] as const);

import { arrayToEnum } from '@pack/shared/src/helpers/misc/types';

export const CONFIG_ENV_VAR_NAMES = arrayToEnum([
  'SERVER_PORT',
  'SERVER_HOST',
] as const);

import { arrayToEnum } from '../../helpers/misc';

const ERROR_TYPE_KEYS = ['critical', 'error', 'warning', 'info', 'debug'] as const;

export const ERROR_TYPE: { readonly [K in typeof ERROR_TYPE_KEYS[number]]: K } = arrayToEnum(ERROR_TYPE_KEYS);

export type ErrorType = keyof typeof ERROR_TYPE;

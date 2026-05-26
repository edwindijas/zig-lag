import { arrayToEnum } from '../../helpers/misc';

export const API_STATUS = arrayToEnum(['success', 'error', 'loading'] as const);

export type ApiStatus = keyof typeof API_STATUS;

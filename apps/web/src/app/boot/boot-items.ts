import { initialiseAuth } from '@/features/auth/boot';

export const appBootItems: Array<() => void | Promise<void>> = [
  // auth
  initialiseAuth,
];

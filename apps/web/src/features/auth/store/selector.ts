import { type RootState } from '@/app/store';

import type { AuthUser, AuthState } from '../models/user';

export const authSelector = (s: RootState): AuthState => s.auth;

export const authUserSelector = (s: RootState): AuthUser | null => s.auth.user;

import type { ProtectedUser } from '@pack/shared/src/schema/user';

export interface AuthState {
  user: ProtectedUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

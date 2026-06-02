import type { ProtectedUser } from '@pack/shared/src/schema/user';

export interface AuthState {
  user: ProtectedUser | null;
  isLoading: boolean;
}

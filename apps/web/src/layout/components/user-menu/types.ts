import type { ProtectedUser } from '@pack/shared/src/schema/user';

export interface UserMenuProps {
  active: boolean;
  user: ProtectedUser | null;
  onSignOut: VoidFunction;
}

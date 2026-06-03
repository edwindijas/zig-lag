import type { ProtectedUser } from '@pack/shared/src/schema/user';
import { useSelector } from 'react-redux';

import { authUserSelector } from '../store/selector';

export const useUser = (strict: boolean = false): ProtectedUser | null => {
  const user = useSelector(authUserSelector);

  if (strict && !user) {
    throw new Error('User is not authenticated');
  }

  return user;
};

export const useStrictUser = (): ProtectedUser => {
  return useUser(true) as ProtectedUser;
};

import { useSelector } from 'react-redux';

import type { AuthUser } from '../models/user';
import { authUserSelector } from '../store/selector';

export const useUser = (): AuthUser | null => {
  return useSelector(authUserSelector);
};

import { useSelector } from 'react-redux';

import type { AuthState } from '../models/user';
import { authSelector } from '../store/selector';

export const useAuth = (): AuthState | null => {
  return useSelector(authSelector);
};

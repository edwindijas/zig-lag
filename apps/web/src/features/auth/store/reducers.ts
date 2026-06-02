import type { ProtectedUser } from '@pack/shared/src/schema/user';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { AuthState } from '../models/user';

export const reducers = {
  setUser: (state: AuthState, action: PayloadAction<ProtectedUser>) => {
    state.user = action.payload;
  },
  setIsLoading: (state: AuthState, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
  },
};

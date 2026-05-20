import type { PayloadAction } from '@reduxjs/toolkit';

import type { AuthState, AuthUser } from '../models/user';

export const reducers = {
  setUser: (state: AuthState, action: PayloadAction<AuthUser>) => {
    state.user = action.payload;
  },
  setIsAuthenticated: (state: AuthState, action: PayloadAction<boolean>) => {
    state.isAuthenticated = action.payload;
  },
  setIsLoading: (state: AuthState, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
  },
};

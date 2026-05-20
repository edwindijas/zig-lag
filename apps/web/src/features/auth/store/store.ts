import { createSlice } from '@reduxjs/toolkit';

import type { AuthState } from '../models/user';

import { reducers } from './reducers';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const { setUser, setIsAuthenticated } = authStore.actions;

export const authReducer = authStore.reducer;

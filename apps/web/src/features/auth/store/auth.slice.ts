import { createSlice } from '@reduxjs/toolkit';

import type { AuthState } from '../models/user';

import { reducers } from './reducers';

const initialState: AuthState = {
  user: null,
  isLoading: true,
};

export const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const { setUser, setIsLoading } = authStore.actions;

export const authReducer = authStore.reducer;

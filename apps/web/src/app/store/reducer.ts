import { combineSlices } from '@reduxjs/toolkit';

import { authReducer } from '@/src/features/auth/store/auth.slice';

export const rootReducer = combineSlices({
  auth: authReducer,
}).withLazyLoadedSlices();

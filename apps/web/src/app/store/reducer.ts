import { combineSlices } from '@reduxjs/toolkit';

import { authReducer } from '@/features/auth/store/store';

export const rootReducer = combineSlices({
  auth: authReducer,
}).withLazyLoadedSlices();

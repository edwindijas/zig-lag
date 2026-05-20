import type { RouteObject } from 'react-router';

import { SigninPageLoader } from '../pages';

export const authRoutes: RouteObject = {
  path: 'auth',
  children: [
    {
      path: 'signin',
      Component: SigninPageLoader,
      handle: {
        requiresAuth: false,
      },
    },
  ],
};

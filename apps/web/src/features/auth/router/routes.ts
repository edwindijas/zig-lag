import type { RouteObject } from 'react-router';

import { SigninPageLoader, SignupPageLoader } from '../pages';

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
    {
      path: 'signup',
      Component: SignupPageLoader,
      handle: {
        requiresAuth: false,
      },
    },
  ],
};

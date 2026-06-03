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
        shell: {
          fullscreen: true,
        },
      },
    },
    {
      path: 'signup',
      Component: SignupPageLoader,
      handle: {
        shell: {
          fullscreen: true,
        },
        requiresAuth: false,
      },
    },
  ],
};

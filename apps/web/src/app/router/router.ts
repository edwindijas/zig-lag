import { createBrowserRouter, type RouteObject } from 'react-router';

import { AuthRouteGuard } from '@/src/features/auth/router';

import { routes } from './routes';

export const router = createBrowserRouter([{
  path: '',
  Component: AuthRouteGuard,
  children: routes as RouteObject[],
}]);

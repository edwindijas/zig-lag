import { createBrowserRouter, type RouteObject } from 'react-router';

import { RouterWrapper } from './outlet';
import { routes } from './routes';

export const router = createBrowserRouter([{
  path: '',
  Component: RouterWrapper,
  children: routes as RouteObject[],
}]);

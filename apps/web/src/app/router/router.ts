import { createBrowserRouter, type RouteObject } from 'react-router';

import { RouterOutlet } from './outlet';
import { routes } from './routes';

export const router = createBrowserRouter([{
  path: '',
  Component: RouterOutlet,
  children: routes as RouteObject[],
}]);

import type { RouteObject } from 'react-router';

import { DashboardMainPageLoader } from './pages/main';

export const dashboardRoute: RouteObject = {
  path: '/',
  children: [
    {
      path: '',
      Component: DashboardMainPageLoader,
    },
  ],
};

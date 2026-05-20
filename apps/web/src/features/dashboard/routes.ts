import type { AppRouteObject } from '@/src/app/router/types';

import { DashboardMainPageLoader } from './pages/main';

export const dashboardRoutes: AppRouteObject = {
  path: '/',
  handle: {
    requiresAuth: false,
  },
  children: [
    {
      path: '',
      Component: DashboardMainPageLoader,
    },
  ],
};

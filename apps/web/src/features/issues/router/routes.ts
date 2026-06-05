import type { RouteObject } from 'react-router';

import { IssuesHomePageLoader } from '../pages/issues-home';

export const issuesRoutes: RouteObject = {
  path: '/issues',
  children: [
    {
      path: '',
      Component: IssuesHomePageLoader,
    },
  ],
};

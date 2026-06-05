import type { RouteObject } from 'react-router';

import { MyTeamHomePageLoader } from '../pages/my-team-home';

export const myTeamRoutes: RouteObject = {
  path: '/my-team',
  children: [
    {
      path: '',
      Component: MyTeamHomePageLoader,
    },
  ],
};

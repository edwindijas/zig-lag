import type { RouteObject } from 'react-router';

import { TracksHomePageLoader } from '../pages/tracks-home';

export const tracksRoutes: RouteObject = {
  path: '/tracks',
  children: [
    {
      path: '',
      Component: TracksHomePageLoader,
    },
  ],
};

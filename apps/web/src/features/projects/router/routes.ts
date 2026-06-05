import type { RouteObject } from 'react-router';

import { ProjectsHomePageLoader } from '../pages/projects-home';

export const projectsRoutes: RouteObject = {
  path: 'projects',
  children: [
    {
      path: '',
      Component: ProjectsHomePageLoader,
    },
  ],
};

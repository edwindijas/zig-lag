import { issuesRoutes } from '@/src/features/issues/router';
import { myTeamRoutes } from '@/src/features/my-team/router';
import { projectsRoutes } from '@/src/features/projects/router/routes';

import { settingsRoutes } from '@/src/features/settings/router/routes';
import { tracksRoutes } from '@/src/features/tracks/router';

import { authRoutes } from '@/features/auth/router';
import { dashboardRoutes } from '@/features/dashboard/routes';

import type { AppRouteObject } from './types';

export const routes: AppRouteObject[] = [
  dashboardRoutes,
  authRoutes,
  projectsRoutes,
  tracksRoutes,
  issuesRoutes,
  myTeamRoutes,
  settingsRoutes,
];

import { authRoutes } from '@/features/auth/router';
import { dashboardRoutes } from '@/features/dashboard/routes';

import type { AppRouteObject } from './types';

export const routes: AppRouteObject[] = [dashboardRoutes, authRoutes];

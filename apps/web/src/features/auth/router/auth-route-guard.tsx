import { type ReactNode } from 'react';
import { Outlet, Navigate } from 'react-router';

import { useRouteHandle } from '@/src/hooks/use-route-handle';

import { useAuth } from '../hooks';

export const AuthRouteGuard = (): ReactNode => {
  const { isAuthenticated, isLoading } = useAuth();
  const { requiresAuth } = useRouteHandle();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated && requiresAuth) {
    return <Navigate to="/auth/signin" />;
  }
  return <Outlet />;
};

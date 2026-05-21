import { type PropsWithChildren, type ReactNode } from 'react';
import { Navigate } from 'react-router';

import { useRouteHandle } from '@/src/hooks/use-route-handle';

import { useAuth } from '../hooks';

export const AuthRouteGuard = ({ children }: PropsWithChildren): ReactNode => {
  const { isAuthenticated, isLoading } = useAuth();
  const { requiresAuth } = useRouteHandle();
  // eslint-disable-next-line no-console
  console.log('AuthRouteGuard: isAuthenticated=', isAuthenticated, 'requiresAuth=', requiresAuth);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated && requiresAuth) {
    return <Navigate to="/auth/signin" />;
  }
  return children;
};

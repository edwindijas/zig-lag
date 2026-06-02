import { type PropsWithChildren, type ReactNode } from 'react';
import { Navigate, useMatches } from 'react-router';

import { useRouteHandle } from '@/src/hooks/use-route-handle';

import { useAuth } from '../hooks';

export const AuthRouteGuard = ({ children }: PropsWithChildren): ReactNode => {
  const { user, isLoading } = useAuth();
  const { requiresAuth } = useRouteHandle();
  const matches = useMatches();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user && matches.some((match) => match.pathname === '/auth/signin' || match.pathname === '/auth/signup')) {
    return <Navigate to="/" />;
  }

  if (!user && requiresAuth) {
    return <Navigate to="/auth/signin" />;
  }
  return children;
};

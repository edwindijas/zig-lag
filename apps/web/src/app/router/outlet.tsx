import type { ReactNode } from 'react';

import { Outlet } from 'react-router';

import { AppThemeProvider } from '@/src/app/theme';
import { AuthRouteGuard } from '@/src/features/auth/router';
import { LayoutShell } from '@/src/layout';

export const RouterWrapper = (): ReactNode => {
  return (
    <AppThemeProvider>
      <LayoutShell>
        <AuthRouteGuard>
          <Outlet />
        </AuthRouteGuard>
      </LayoutShell>
    </AppThemeProvider>
  );
};

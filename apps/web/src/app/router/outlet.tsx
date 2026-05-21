import type { ReactNode } from 'react';

import { Outlet } from 'react-router';

import { AuthRouteGuard } from '@/src/features/auth/router';
import { LayoutShell } from '@/src/layout';
import { AppThemeProvider } from '@/src/theme';

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

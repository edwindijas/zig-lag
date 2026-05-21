import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

import { LayoutShell } from '@/src/layout';
import { AppThemeProvider } from '@/src/theme';

export const RouterOutlet = (): ReactNode => {
  return (
    <AppThemeProvider>
      <LayoutShell>
        <Outlet />
      </LayoutShell>
    </AppThemeProvider>
  );
};

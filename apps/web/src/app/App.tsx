import type { ReactNode } from 'react';

import { RouterProvider } from './router';
import { StoreProvider } from './store/provider';
import { GlobalResetCSS } from './styles/reset';

export const App = (): ReactNode => {
  return (
    <StoreProvider>
      <GlobalResetCSS />
      <RouterProvider />
    </StoreProvider>
  );
};

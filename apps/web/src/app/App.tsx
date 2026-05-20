import type { ReactNode } from 'react';

import { RouterProvider } from './router';
import { StoreProvider } from './store/provider';

export const App = (): ReactNode => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};

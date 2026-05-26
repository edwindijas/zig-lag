import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { RouterProvider } from './router';
import { StoreProvider } from './store/provider';
import { GlobalResetCSS } from './styles/reset';

const queryClient = new QueryClient();

export const App = (): ReactNode => {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalResetCSS />
        <RouterProvider />
      </QueryClientProvider>
    </StoreProvider>
  );
};

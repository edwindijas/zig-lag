import type { ReactElement } from 'react';

import { RouterProvider as ReactRouterProvider } from 'react-router';

import { router } from './router';

export const RouterProvider = (): ReactElement => {
  return <ReactRouterProvider router={router} />;
};

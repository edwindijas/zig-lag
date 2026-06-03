import type { IndexRouteObject, NonIndexRouteObject } from 'react-router';

export interface AppRouteHandle {
  requiresAuth?: boolean;
  shell: {
    fullscreen?: boolean;
    sideMenu?: boolean;
    topBar?: boolean;
  };
}

export type AppIndexRouteObject = Omit<
  IndexRouteObject,
  'handle' | 'children'
> & {
  handle?: AppRouteHandle;
  children?: AppRouteObject[];
};

export type AppNonIndexRouteObject = Omit<
  NonIndexRouteObject,
  'handle' | 'children'
> & {
  handle?: AppRouteHandle;
  children?: AppRouteObject[];
};

export type AppRouteObject = AppIndexRouteObject | AppNonIndexRouteObject;

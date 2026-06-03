import { useMatches } from 'react-router';

import type { AppRouteHandle } from '@/app/router';

export const useRouteHandle = (): Required<AppRouteHandle> => {
  const matches = useMatches();

  const currentMatch = matches[matches.length - 1];

  const handle = (currentMatch?.handle ?? {}) as Partial<AppRouteHandle>;

  return {
    requiresAuth: handle.requiresAuth ?? true,
    shell: {
      fullscreen: handle.shell?.fullscreen ?? false,
      topBar: handle.shell?.topBar ?? true,
      sideMenu: handle.shell?.sideMenu ?? true,
    },
  };
};

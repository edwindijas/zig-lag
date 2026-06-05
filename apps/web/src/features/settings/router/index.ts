import type { RouteObject } from 'react-router';

import { AccountSettingsPageLoader } from '../pages/account-settings/loader';
import { ProfileSettingsPageLoader } from '../pages/profile-settings';

export const profileRoutes: RouteObject = {
  path: '/settings',
  children: [
    {
      path: '',
      Component: ProfileSettingsPageLoader,
    },
    {
      path: '/account',
      Component: AccountSettingsPageLoader,
    },
  ],
};

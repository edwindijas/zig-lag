import { Suspense, lazy, type ReactNode } from 'react';

const ProfileSettingsPage = lazy(async () =>
  await import('./profile-settings').then(({ ProfileSettingsPage }) => ({ default: ProfileSettingsPage })));

export const ProfileSettingsPageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileSettingsPage />
    </Suspense>
  );
};

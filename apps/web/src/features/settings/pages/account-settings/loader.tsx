import { Suspense, lazy, type ReactNode } from 'react';

const AccountSettingsPage = lazy(async () =>
  await import('./account-settings').then(({ AccountSettingsPage }) => ({ default: AccountSettingsPage })));

export const AccountSettingsPageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountSettingsPage />
    </Suspense>
  );
};

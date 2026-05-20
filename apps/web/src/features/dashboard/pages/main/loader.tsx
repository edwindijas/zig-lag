import { Suspense, lazy, type ReactNode } from 'react';

const MainPage = lazy(async () =>
  await import('./main').then(({ MainPage }) => ({ default: MainPage })));

export const DashboardMainPageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPage />
    </Suspense>
  );
};

import { Suspense, lazy, type ReactNode } from 'react';

const TracksHomePage = lazy(async () =>
  await import('./tracks-home').then(({ TracksHomePage }) => ({ default: TracksHomePage })));

export const TracksHomePageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TracksHomePage />
    </Suspense>
  );
};

import { Suspense, lazy, type ReactNode } from 'react';

const IssuesHomePage = lazy(async () =>
  await import('./issues-home').then(({ IssuesHomePage }) => ({ default: IssuesHomePage })));

export const IssuesHomePageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IssuesHomePage />
    </Suspense>
  );
};

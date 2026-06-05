import { Suspense, lazy, type ReactNode } from 'react';

const MyTeamHomePage = lazy(async () =>
  await import('./my-team-home').then(({ MyTeamHomePage }) => ({ default: MyTeamHomePage })));

export const MyTeamHomePageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyTeamHomePage />
    </Suspense>
  );
};

import { Suspense, lazy, type ReactNode } from 'react';

const ProjectHomePage = lazy(async () =>
  await import('./projects-home').then(({ ProjectsHome }) => ({ default: ProjectsHome })));

export const ProjectsHomePageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectHomePage />
    </Suspense>
  );
};

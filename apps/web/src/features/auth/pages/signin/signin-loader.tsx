import { Suspense, lazy, type ReactNode } from 'react';

const SigninPage = lazy(async () =>
  await import('./signin').then(({ SigninPage }) => ({ default: SigninPage })));

export const SigninPageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SigninPage />
    </Suspense>
  );
};

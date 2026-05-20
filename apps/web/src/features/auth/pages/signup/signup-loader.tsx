import { Suspense, lazy, type ReactNode } from 'react';

const SignupPage = lazy(async () =>
  await import('./signup').then(({ SignupPage }) => ({ default: SignupPage })));

export const SignupPageLoader = (): ReactNode => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupPage />
    </Suspense>
  );
};

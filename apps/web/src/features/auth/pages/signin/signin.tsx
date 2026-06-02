import type { AuthSigninRequest } from '@pack/shared/src/schema/auth';
import type { ReactNode } from 'react';

import { SigninForm } from '../../components/signin-form';
import { useSigninMutation } from '../../queries/user';

export const SigninPage = (): ReactNode => {
  const { mutate: signin } = useSigninMutation();

  const handleSignin = (data: AuthSigninRequest): void => {
    signin(data.body);
  };

  return (
    <div>
      <SigninForm onSubmit={handleSignin} />
    </div>
  );
};

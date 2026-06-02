import type { UserSigninRequest } from '@pack/shared/src/schema/user';
import type { ReactNode } from 'react';

import { useDispatch } from 'react-redux';

import { SigninForm } from '../../components/signin-form';
import { useSigninMutation } from '../../queries/user';
import { setUser } from '../../store/auth.slice';

export const SigninPage = (): ReactNode => {
  const dispatch = useDispatch();
  const { mutateAsync: signin, data: user } = useSigninMutation();

  const handleSignin = async (data: UserSigninRequest): Promise<void> => {
    await signin(data);
    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <div>
      <SigninForm onSubmit={handleSignin} />
    </div>
  );
};

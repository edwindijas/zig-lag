import type { UserSignupRequest } from '@pack/shared/src/schema/user';
import { type ReactNode } from 'react';

import { SignupForm } from '../../components/signup-form/signup';

import { useCreateUserMutation } from '../../queries/user';

import {
  StyledSignupFormWrapper,
  StyledSignupWrapper,
} from './style';

export const SignupPage = (): ReactNode => {
  const { mutate: createUser } = useCreateUserMutation();

  const createAccount = (data: UserSignupRequest): void => {
    createUser(data);
  };

  return (
    <StyledSignupWrapper>
      <StyledSignupFormWrapper>
        <SignupForm onSubmit={createAccount} />
      </StyledSignupFormWrapper>
    </StyledSignupWrapper>
  );
};

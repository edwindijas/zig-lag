import type { SignupRequest } from '@pack/shared/src/schema/auth';
import { type ReactNode } from 'react';

import { SignupForm } from '../../components/signup-form/signup';

import { useCreateUserMutation } from '../../queries/user';

import {
  StyledSignupFormWrapper,
  StyledSignupWrapper,
} from './style';

export const SignupPage = (): ReactNode => {
  const { mutate: createUser } = useCreateUserMutation();

  const createAccount = (data: SignupRequest): void => {
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

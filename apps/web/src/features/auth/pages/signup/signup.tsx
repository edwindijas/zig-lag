import type { SignupRequest } from '@pack/shared/src/schema/auth';
import { type ReactNode } from 'react';

import { SignupForm } from '../../components/signup-form/signup';

import {
  StyledSignupFormWrapper,
  StyledSignupWrapper,
} from './style';

export const SignupPage = (): ReactNode => {
  const createAccount = (data: SignupRequest): void => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <StyledSignupWrapper>
      <StyledSignupFormWrapper>
        <SignupForm onSubmit={createAccount} />
      </StyledSignupFormWrapper>
    </StyledSignupWrapper>
  );
};

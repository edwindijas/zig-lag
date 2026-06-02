import { authSigninRequestSchema, type AuthSigninRequest } from '@pack/shared/src/schema/auth';
import { useState, type ReactElement, type SubmitEvent } from 'react';
import { Link } from 'react-router';

import type { $ZodIssue } from 'zod/v4/core';

import { FormField } from '@/src/components/molecules/inputs/form-field';
import { mapZodIssue } from '@/src/utils/zod';

import { StyledButton,
  StyledButtonWrapper,
  StyledInputsWrapper,
  StyledSigninForm,
  StyledSigninFormContainer,
  StyledSigninFormTitle,
  StyledSigninFormTitleP,
  StyledSigninFormTitleWrapper,
} from './style';
import type { SigninFormProps } from './types';

export const SigninForm = ({ onSubmit }: SigninFormProps): ReactElement => {
  const [formData, setFormData] = useState<Partial<AuthSigninRequest['body']>>({});
  const [errors, setErrors] = useState<Record<string, $ZodIssue[]>>({});

  const handleInputChange = (field: keyof AuthSigninRequest['body']) => (value: string): void => {
    setFormData((prev: Partial<AuthSigninRequest['body']>) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const result = authSigninRequestSchema.safeParse({ body: formData });
    setErrors({});
    if (!result.success) {
      setErrors(mapZodIssue(result.error));
      return;
    };
    if (!onSubmit) {
      return;
    }
    onSubmit(result.data);
  };

  return (
    <StyledSigninFormContainer>
      <StyledSigninFormTitleWrapper>
        <StyledSigninFormTitle>Sign in</StyledSigninFormTitle>
        <StyledSigninFormTitleP>Please fill in the form below to create your account.</StyledSigninFormTitleP>
      </StyledSigninFormTitleWrapper>
      <StyledSigninForm onSubmit={handleSubmit}>
        <StyledInputsWrapper>
          <FormField label="Email" onChange={handleInputChange('email')} errors={errors['email']} />
          <FormField label="Password" type="password" onChange={handleInputChange('password')} errors={errors['password']} />
        </StyledInputsWrapper>
        <StyledButtonWrapper>
          <StyledButton type="submit">Sign in</StyledButton>
        </StyledButtonWrapper>
      </StyledSigninForm>
      <div>
        <Link to="/auth/signup">Don't have a account. Signup</Link>
      </div>
    </StyledSigninFormContainer>
  );
};

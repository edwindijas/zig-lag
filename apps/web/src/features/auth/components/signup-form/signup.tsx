import { userSignupRequestSchema, type UserSignupRequest } from '@pack/shared/src/schema/user';
import { useState, type ReactElement, type SubmitEvent } from 'react';
import { Link } from 'react-router';

import type { $ZodIssue } from 'zod/v4/core';

import { FormField } from '@/src/components/molecules/inputs/form-field';
import { mapZodIssue } from '@/src/utils/zod';

import { StyledButton,
  StyledButtonWrapper,
  StyledInputsWrapper,
  StyledSignupForm,
  StyledSignupFormContainer,
  StyledSignupFormTitle,
  StyledSignupFormTitleP,
  StyledSignupFormTitleWrapper,
} from './style';
import type { SignupFormProps } from './types';

export const SignupForm = ({ onSubmit }: SignupFormProps): ReactElement => {
  const [formData, setFormData] = useState<Partial<UserSignupRequest['body']>>({});
  const [errors, setErrors] = useState<Record<string, $ZodIssue[]>>({});

  const handleInputChange = (field: keyof UserSignupRequest['body']) => (value: string): void => {
    setFormData((prev: Partial<UserSignupRequest['body']>) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const result = userSignupRequestSchema.safeParse({ body: formData });
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
    <StyledSignupFormContainer>
      <StyledSignupFormTitleWrapper>
        <StyledSignupFormTitle>Create an account</StyledSignupFormTitle>
        <StyledSignupFormTitleP>Please fill in the form below to create your account.</StyledSignupFormTitleP>
      </StyledSignupFormTitleWrapper>
      <StyledSignupForm onSubmit={handleSubmit}>
        <StyledInputsWrapper>
          <FormField label="Name" onChange={handleInputChange('name')} errors={errors['name']} />
          <FormField label="Email" onChange={handleInputChange('email')} errors={errors['email']} />
          <FormField label="Company" onChange={handleInputChange('company')} errors={errors['company']} />
          <FormField label="Password" type="password" onChange={handleInputChange('password')} errors={errors['password']} />
        </StyledInputsWrapper>
        <StyledButtonWrapper>
          <StyledButton type="submit">Create an account</StyledButton>
        </StyledButtonWrapper>
      </StyledSignupForm>
      <div>
        <Link to="/auth/signin">Already have an account? Sign in</Link>
      </div>
    </StyledSignupFormContainer>
  );
};

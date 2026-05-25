import { type SignupRequest } from '@pack/shared/src/schema/auth';
import { type ReactNode, useState, type SubmitEvent } from 'react';
import { Link } from 'react-router';

import { BasicInput } from '@/src/components/atoms/inputs/basic-input';

import {
  StyledSignupFormWrapper,
  StyledSignupForm,
  StyledSignupFormTitle,
  StyledSignupWrapper,
  StyledInputsWrapper,
  StyledButtonWrapper,
  StyledButton,
  StyledSignupFormContainer,
  StyledSignupFormTitleP,
  StyledSignupFormTitleWrapper,
} from './style';

export const SignupPage = (): ReactNode => {
  const [formData, setFormData] = useState<Partial<SignupRequest>>({});

  const handleInputChange = (field: keyof SignupRequest) => (value: string): void => {
    setFormData((prev: Partial<SignupRequest>) => ({ ...prev, [field]: value }));
  };

  const submitForm = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send formData to the server
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
  };

  return (
    <StyledSignupWrapper>
      <StyledSignupFormWrapper>
        <StyledSignupFormContainer>
          <StyledSignupFormTitleWrapper>
            <StyledSignupFormTitle>Create an account</StyledSignupFormTitle>
            <StyledSignupFormTitleP>Please fill in the form below to create your account.</StyledSignupFormTitleP>
          </StyledSignupFormTitleWrapper>
          <StyledSignupForm onSubmit={submitForm}>
            <StyledInputsWrapper>
              <BasicInput label="Name" onChange={handleInputChange('name')} />
              <BasicInput label="Email" onChange={handleInputChange('email')} />
              <BasicInput label="Company" onChange={handleInputChange('company')} />
              <BasicInput label="Password" type="password" onChange={handleInputChange('password')} />
            </StyledInputsWrapper>
            <StyledButtonWrapper>
              <StyledButton type="submit">Create an account</StyledButton>
            </StyledButtonWrapper>
          </StyledSignupForm>
          <div>
            <Link to="/auth/signin">Already have an account? Sign in</Link>
          </div>
        </StyledSignupFormContainer>
      </StyledSignupFormWrapper>
    </StyledSignupWrapper>
  );
};

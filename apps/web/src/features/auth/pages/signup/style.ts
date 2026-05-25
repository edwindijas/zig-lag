import { styled } from 'styled-components';

export const StyledSignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

export const StyledSignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 auto;
  height: 100%;
  justify-content: center;
  width: 35%;
  background-color: #fff;
  min-width: 48rem;
`;

export const StyledSignupFormContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const StyledSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const StyledSignupFormTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const StyledSignupFormTitle = styled.h2`
  font-size: 3.2rem;
`;

export const StyledSignupFormTitleP = styled.p`
  font-size: 1.6rem;
`;

export const StyledSignupFormField = styled.div``;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const StyledButtonWrapper = styled.div`
  padding: 1.2rem 0;
`;

export const StyledButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  background-color: #333;
  width: 100%;
  color: #fff;
  height: 4.6rem;
  border-radius: 10rem;
`;

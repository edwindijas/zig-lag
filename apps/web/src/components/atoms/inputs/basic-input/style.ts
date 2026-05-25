import { styled } from 'styled-components';

export const StyledBasicInputWrapper = styled.label`
  display: flex;
  width: 100%;
  position: relative;
`;

export const StyledBasicInputTextLabel = styled.span<{ $isActive: boolean, }>`
  display: flex;
  top: 0rem;
  position: absolute;
  font-size: 1.4rem;
  align-items: center;
  bottom: 0;
  padding: 0 1.2rem;
  transition: all 0.2s ease-in-out;
  ${({ $isActive }) => $isActive && 'font-size: 1rem; top: -3rem; color: #333;'}
`;

export const StyledBasicInput = styled.input<{ $active: boolean, }>`
  display: flex;
  width: 100%;
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  height: 4.6rem;
  border: 0.1rem solid #ccc;
  outline: none;
  ${({ $active }) => $active && 'border-color: #333;'}
`;

export const StyledBasicInputErrorWrapper = styled.div`
  display: flex;
`;

export const StyledBasicInputError = styled.p`
  display: flex;
`;

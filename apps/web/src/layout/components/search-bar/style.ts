import { styled } from 'styled-components';

export const StyledToolbarSearch = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  min-width: 28rem;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const StyledToolbarContainer = styled.div`
  height: 100%;
  background-color: #f4f4f8;
  width: 90%;
  margin: 0 auto;
  max-width: 540px;
  height: 4.5rem;
  border-radius: 20rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  color: #555;
`;

export const StyledSearchIcon = styled.figure`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const StyledSearchBarLabel = styled.span``;

export const StyledInputContainer = styled.label``;

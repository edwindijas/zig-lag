import { styled } from 'styled-components';

export const StyledLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export const StyledMain = styled.main`
  flex: 1;
  display: flex;
`;

export const StyledContentContainer = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 1.8rem;
  overflow: auto;
`;

export const StyledToolbarContainer = styled.div`
  position: relative;
`;

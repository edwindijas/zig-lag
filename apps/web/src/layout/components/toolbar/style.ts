import { styled } from 'styled-components';

export const StyledTopMenu = styled.header`
  height: 60px;
  background-color: #f0f0f0;
`;

export const StyledToolsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  & > div {
    flex: 1;
  }
`;

export const StyledRightTools = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

export const StyledUserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledUserAvatar = styled.figure`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ccc;
  flex-shrink: 0;
`;

export const StyledUserName = styled.span``;

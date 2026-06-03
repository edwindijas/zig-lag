import { styled } from 'styled-components';

export const StyledTopMenu = styled.header`
  height: 60px;
  background-color: #f0f0f0;
  position: relative;
  z-index: 999999;
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
  justify-content: flex-end;
  height: 100%;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

export const StyledUserButton = styled(StyledButton)`
  gap: 2rem;
  padding: 0 2rem;
  flex-shrink: 0;
`;

export const StyledUserAvatar = styled.figure`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ccc;
  flex-shrink: 0;
`;

export const StyleTopMenuWrapper = styled.div`
  position: relative;
`;

export const StyledUserName = styled.span`
  text-transform: capitalize;
  color: #444;
`;

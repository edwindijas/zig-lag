import { Link } from 'react-router';
import { styled } from 'styled-components';

export const StyledTopMenu = styled.header`
  height: 6rem;
  background-color: #e2e2e9;
  position: relative;
  z-index: 999999;
`;

export const StyledToolsContainer = styled.div`
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  & > div {
    flex: 1;
    @media (max-width: 720px) {
      flex: 0;
    }
  }
`;

export const StyledRightTools = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  gap: 0.8rem;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.5rem;
  height: 4.5rem;
  fill: #888;
  border-radius: 4rem;
  border: 1px solid #ccc;
  background-color: #efeff4;
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

export const StyledSearchButton = styled(StyledButton)`
  display: none;
  svg {
    transform: rotate(90deg);
    transform-origin: center;
  }

  @media (max-width: 720px) {
    display: flex;
  }
`;

export const StyledUserButton = styled(StyledButton)`
  gap: 1.2rem;
  padding: 0 0.6rem;
  flex-shrink: 0;
`;

export const StyledUserAvatar = styled.figure`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #cececf;
  flex-shrink: 0;
  border: 1px solid #c0c0c9;
`;

export const StyleTopMenuWrapper = styled.div`
  position: relative;
`;

export const StyledUserName = styled.span`
  text-transform: capitalize;
  color: #444;

  @media (max-width: 820px) {
    width: 0;
    overflow: hidden;
  }
`;

export const StyledLeftPane = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
  gap: 1.2rem;
  height: 100%;
  align-items: center;
  color: #222;
`;

export const StyledLogo = styled.figure`
  height: 4rem;
  width: 4rem;
  border: 0.2rem solid #222;
  padding: 0.5rem;
  border-radius: 50%;
`;

export const StyledLogoText = styled.figcaption`
  font-size: 2rem;
  font-weight: bold;
`;
export const StyledMoreIcon = styled.figure`
  width: 2.4rem;
`;

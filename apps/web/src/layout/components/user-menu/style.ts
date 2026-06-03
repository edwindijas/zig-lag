import { Link } from 'react-router';
import { styled } from 'styled-components';

export const StyledUserMenuItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  color: #444;
  fill: #444;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #eee;
  }
  svg {
    width: 2rem;
  }
`;

export const StyledMenuUser = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  flex-direction: column;
`;

export const StyledUserMenuName = styled.p`
  font-weight: bold;
  text-transform: capitalize;
`;

export const StyledUserMenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 1.2rem;
  height: 4rem;
  padding: 0 1.6rem;
  svg {
    width: 2rem;
  }
  align-items: center;
`;

export const StyledUserMenuButton = styled.button`
  background: none;
  display: flex;
  gap: 1.2rem;
  height: 4rem;
  padding: 0 1.6rem;
  align-items: center;
  color: inherit;
  width: 100%;
`;

export const StyledUserMenu = styled.div`
  --transform-time: 0.8s;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 90%;
  margin: 0 auto;
  z-index: 999998;
`;

export const StyledUserMenuContainer = styled.div<{
  $height: number;
  $active: boolean;
}>`
  display: flex;
  flex-direction: column;
  top: ${({ $height, $active }) => (!$active ? -($height / 10 + 1.4) : 6.4)}rem;
  border: 1px solid #eee;
  width: 25rem;
  box-shadow: 1px 5px 10px -2px #888;
  border-radius: 0 0 1rem 1rem;
  transition: top 1s;
  margin: 0 0 0 auto;
  position: relative;
`;

export const StyledUserMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const StyledUserAvatar = styled.figure`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: #ccc;
  flex-shrink: 0;
`;

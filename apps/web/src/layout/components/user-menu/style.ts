import { Link } from 'react-router';
import { styled } from 'styled-components';

export const StyledUserMenuItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
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
  align-items: center;
`;

export const StyledUserMenuButton = styled.button`
  background: none;
  display: flex;
  gap: 1.2rem;
  height: 4rem;
  padding: 0 1.6rem;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: red;
  }
  svg {
    width: 2rem;
  }
`;

export const StyledUserMenu = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 6.4rem;
  right: 0;
  overflow: ${({ $active }) => (!$active ? 'hidden' : 'visible')};
  height: ${({ $active }) => (!$active ? '0' : '27rem')};
  width: 25rem;
`;

export const StyledUserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  height: 100%;
  box-shadow: 1px 5px 10px -2px #888;
  border-radius: 0 0 1rem 1rem;
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

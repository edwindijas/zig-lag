import { NavLink } from 'react-router';
import { styled } from 'styled-components';

export const StyledSidebar = styled.div`
  width: 22rem;
`;

export const StyledSidebarNav = styled.nav`
  padding: 3rem 0;
`;

export const StyledSidebarMenuList = styled.ul`
  padding: 3rem 0;
`;

export const StyledSidebarMenuListItem = styled.li``;

export const StyledSidebarMenuLink = styled(NavLink)`
  display: flex;
  padding: 0 3rem;
  gap: 1rem;
  align-items: center;
  height: 4.6rem;
  color: #666;
  fill: #666;
  border-block: 0.1rem solid transparent;
  font-weight: 600;
  &.active {
    background-color: #fff;
    box-shadow: 0 0 1rem -0.5rem #ccc;
    color: #222;
    fill: #222;
  }
`;

export const StyledSidebarIcon = styled.figure`
  width: 2rem;
`;

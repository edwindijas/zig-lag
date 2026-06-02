import type { ReactElement } from 'react';

import { StyledUserMenu, StyledUserMenuContainer } from './style';
import type { UserMenuProps } from './types';

export const UserMenu = ({ active }: UserMenuProps): ReactElement => {
  return (
    <StyledUserMenu $active={active}>
      <StyledUserMenuContainer>
        <p>User Menu</p>
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </StyledUserMenuContainer>
    </StyledUserMenu>
  );
};

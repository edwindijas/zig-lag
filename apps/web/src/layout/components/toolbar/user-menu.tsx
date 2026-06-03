import type { ReactNode } from 'react';

import { useSignout } from '@/src/features/auth/hooks/use-signout';
import { useUser } from '@/src/features/auth/hooks/use-user';

import { StyledMenuUser, StyledUserMenu, StyledUserMenuButton, StyledUserMenuContainer, StyledUserMenuItem, StyledUserMenuLink, StyledUserMenuList, StyledUserMenuName } from './style';
import type { UserMenuProps } from './types';

export const UserMenu = ({ active }: UserMenuProps): ReactNode => {
  const user = useUser();
  const signout = useSignout();

  if (!user) {
    return null;
  }

  return (
    <StyledUserMenu $active={active || true}>
      <StyledUserMenuContainer>
        <StyledMenuUser>
          <div>Avatar</div>
          <StyledUserMenuName>{user.name}</StyledUserMenuName>
        </StyledMenuUser>
        <StyledUserMenuList>
          <StyledUserMenuItem><StyledUserMenuLink to="/profile">Profile</StyledUserMenuLink></StyledUserMenuItem>
          <StyledUserMenuItem><StyledUserMenuLink to="/settings">Settings</StyledUserMenuLink></StyledUserMenuItem>
          <StyledUserMenuItem>
            <StyledUserMenuButton type="button" onClick={signout}>
              <span>Logout</span>
            </StyledUserMenuButton>
          </StyledUserMenuItem>
        </StyledUserMenuList>
      </StyledUserMenuContainer>
    </StyledUserMenu>
  );
};

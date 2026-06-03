import type { ReactNode } from 'react';

import { IconPowerSettingsNew } from '@/src/components/atoms/icons';
import { useSignout } from '@/src/features/auth/hooks/use-signout';
import { useUser } from '@/src/features/auth/hooks/use-user';

import type { UserMenuProps } from '../toolbar/types';

import { StyledMenuUser, StyledUserAvatar, StyledUserMenu, StyledUserMenuButton, StyledUserMenuContainer, StyledUserMenuItem, StyledUserMenuLink, StyledUserMenuList, StyledUserMenuName } from './style';

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
          <StyledUserAvatar />
          <StyledUserMenuName>{user.name}</StyledUserMenuName>
        </StyledMenuUser>
        <StyledUserMenuList>
          <StyledUserMenuItem><StyledUserMenuLink to="/profile">Profile</StyledUserMenuLink></StyledUserMenuItem>
          <StyledUserMenuItem><StyledUserMenuLink to="/settings">Settings</StyledUserMenuLink></StyledUserMenuItem>
          <StyledUserMenuItem>
            <StyledUserMenuButton type="button" onClick={signout}>
              <IconPowerSettingsNew />
              <span>Logout</span>
            </StyledUserMenuButton>
          </StyledUserMenuItem>
        </StyledUserMenuList>
      </StyledUserMenuContainer>
    </StyledUserMenu>
  );
};

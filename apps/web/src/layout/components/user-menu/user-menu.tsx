import { useEffect, useRef, useState, type ReactNode } from 'react';

import { IconPerson, IconPowerSettingsNew, IconSettings } from '@/src/components/atoms/icons';
import { useSignout } from '@/src/features/auth/hooks/use-signout';

import { StyledMenuUser, StyledUserAvatar, StyledUserMenu, StyledUserMenuButton, StyledUserMenuContainer, StyledUserMenuItem, StyledUserMenuLink, StyledUserMenuList, StyledUserMenuName } from './style';
import type { UserMenuProps } from './types';

export const UserMenu = ({ active, user }: UserMenuProps): ReactNode => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(900);
  const signout = useSignout();
  useEffect(() => {
    if (!active || !contentRef || !contentRef.current) {
      return;
    }
    setHeight(contentRef.current.scrollHeight);
  }, [setHeight, active]);

  if (!user) {
    return null;
  }

  return (
    <StyledUserMenu $active={active} $height={height} ref={contentRef}>
      <StyledUserMenuContainer>
        <StyledMenuUser>
          <StyledUserAvatar />
          <StyledUserMenuName>{user.name}</StyledUserMenuName>
        </StyledMenuUser>
        <StyledUserMenuList>
          <StyledUserMenuItem>
            <StyledUserMenuLink to="/profile">
              <IconPerson />
              <span>Profile</span>
            </StyledUserMenuLink>
          </StyledUserMenuItem>
          <StyledUserMenuItem>
            <StyledUserMenuLink to="/settings">
              <IconSettings />
              <span>Settings</span>
            </StyledUserMenuLink>
          </StyledUserMenuItem>
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

import { useState, type PropsWithChildren, type ReactNode } from 'react';

import { useUser } from '../features/auth';
import { useSignout } from '../features/auth/hooks/use-signout';
import { useRouteHandle } from '../hooks/use-route-handle';

import { SideBar } from './components/sidebar/sidebar';
import { Toolbar } from './components/toolbar';
import { UserMenu } from './components/user-menu';
import { MenuItems } from './const';
import { StyledMain, StyledLayoutContainer, StyledContentContainer, StyledToolbarContainer } from './style';

export const LayoutShell = ({ children }: PropsWithChildren): ReactNode => {
  const { shell: { fullscreen, topBar, sideMenu } } = useRouteHandle();
  const [isUserMenuActive, setIsUserMenuActive] = useState(false);
  const user = useUser();
  const signout = useSignout();
  const toggleUserMenu = (): void => {
    setIsUserMenuActive((prev) => !prev);
  };

  return (
    <StyledLayoutContainer>
      {!fullscreen && topBar
        ? (
          <StyledToolbarContainer>
            <Toolbar onUserMenuClick={toggleUserMenu} user={user} />
            <UserMenu active={isUserMenuActive} user={user} onSignOut={signout} />
          </StyledToolbarContainer>
        )
        : null}
      <StyledMain>
        {!fullscreen && sideMenu && <SideBar menuItems={MenuItems} /> }
        <StyledContentContainer>
          { children }
        </StyledContentContainer>
      </StyledMain>
      <footer />
    </StyledLayoutContainer>
  );
};

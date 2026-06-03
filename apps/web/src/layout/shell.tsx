import type { PropsWithChildren, ReactNode } from 'react';

import { useRouteHandle } from '../hooks/use-route-handle';

import { SideBar } from './components/sidebar/sidebar';
import { Toolbar } from './components/toolbar';
import { MenuItems } from './const';
import { StyledMain, StyledLayoutContainer, StyledContentContainer } from './style';

export const LayoutShell = ({ children }: PropsWithChildren): ReactNode => {
  const { shell: { fullscreen, topBar, sideMenu } } = useRouteHandle();

  return (
    <StyledLayoutContainer>
      {!fullscreen && topBar && <Toolbar />}
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

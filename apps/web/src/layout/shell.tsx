import type { PropsWithChildren, ReactNode } from 'react';

import { SideBar } from './components/sidebar/sidebar';
import { Toolbar } from './components/toolbar';
import { MenuItems } from './const';
import { StyledMain, StyledLayoutContainer, StyledContentContainer } from './style';

export const LayoutShell = ({ children }: PropsWithChildren): ReactNode => {
  return (
    <StyledLayoutContainer>
      <Toolbar />
      <StyledMain>
        <SideBar menuItems={MenuItems} />
        <StyledContentContainer>
          { children }
        </StyledContentContainer>
      </StyledMain>
      <footer />
    </StyledLayoutContainer>
  );
};

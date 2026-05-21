import type { PropsWithChildren, ReactNode } from 'react';

import { StyledMain, StyledLayoutContainer } from './style';

export const LayoutShell = ({ children }: PropsWithChildren): ReactNode => {
  return (
    <StyledLayoutContainer>
      <header />
      <StyledMain>
        { children }
      </StyledMain>
      <footer />
    </StyledLayoutContainer>
  );
};

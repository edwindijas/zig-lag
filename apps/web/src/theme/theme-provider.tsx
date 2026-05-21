import type { PropsWithChildren, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const AppThemeProvider = ({ children }: PropsWithChildren): ReactNode => {
  return (
    <ThemeProvider theme={{}}>
      {children}
    </ThemeProvider>
  );
};

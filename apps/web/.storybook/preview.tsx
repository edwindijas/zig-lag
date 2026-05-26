import type { Preview } from '@storybook/react-vite'

import { GlobalResetCSS } from '../src/app/styles/reset';
import { StoreProvider } from '../src/app/store/';
import { AppThemeProvider } from '../src/app/theme/';

import { MemoryRouter, RouterProvider, Route } from 'react-router';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <StoreProvider>
        <GlobalResetCSS />
         <AppThemeProvider >
          <MemoryRouter >
              <Story />
          </MemoryRouter>
        </AppThemeProvider>
      </StoreProvider>
    ),
  ],
};

export default preview;
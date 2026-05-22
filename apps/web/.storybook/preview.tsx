import type { Preview } from '@storybook/react-vite'

import { GlobalResetCSS } from '../src/app/styles/reset';
import { StoreProvider } from '../src/app/store/';
import { AppThemeProvider } from '../src/app/theme/';

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
          <Story />
        </AppThemeProvider>
      </StoreProvider>
    ),
  ],
};

export default preview;
import type { ArgTypes } from '@storybook/react-vite';

export const basicInputArgTypes: ArgTypes = {
  label: {
    control: 'text',
  },
  onChange: {
    action: 'changed',
  },
};

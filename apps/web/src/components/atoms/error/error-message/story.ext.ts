import { ERROR_TYPE } from '@pack/shared/src/constants/errors';
import type { ArgTypes } from '@storybook/react-vite';

export const errorMessageArgTypes: ArgTypes = {
  errorMessage: {
    control: 'text',
  },
  error: {
    control: 'text',
  },
  errorType: {
    control: 'select',
    options: Object.values(ERROR_TYPE),
  },
  container: {
    control: {
      type: 'boolean',
    },
  },
};

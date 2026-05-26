import { ERROR_TYPE } from '@pack/shared/src/constants/errors';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ErrorMessage as Component } from './error-message';
import { errorMessageArgTypes } from './story.ext';

const meta: Meta = {
  title: 'Components/Atoms/Error/ErrorMessage',
  component: Component,
  argTypes: errorMessageArgTypes,
  args: {
    error: 'Error message if no error is pumped',
    errorType: ERROR_TYPE.error,
    container: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorMessage: Story = {
  args: {
    errorMessage: 'hello World',
  },
};

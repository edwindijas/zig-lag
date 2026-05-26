import type { Meta, StoryObj } from '@storybook/react-vite';

import { basicInputArgTypes } from '@/src/components/atoms/inputs/basic-input/args';

import { FormField as component } from './form-field';

const meta: Meta = {
  component,
  title: 'Components/Molecules/FormField',
  argTypes: {
    ...basicInputArgTypes,
    errors: {
      control: 'object',
      description: 'A 2d array representing errors',
    },
  },
  args: {
    errors: [
      'Email already exists',
    ],
    container: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const MultiError: Story = {
  args: {
    errors: [
      'Email already exists',
      'Email Cannot be blanks',
      'Other error',
    ],
  },
};

import { type Meta } from '@storybook/react-vite';

import { BasicInput as Component } from './basic-input';

const meta: Meta = {
  component: Component,
  title: 'Atoms/Inputs/Basic Input',
  argTypes: {
    label: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;

export const BasicInput = {
  args: {
    label: 'Text input',
  },
};

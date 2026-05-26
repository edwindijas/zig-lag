import { type Meta } from '@storybook/react-vite';

import { basicInputArgTypes } from './args';
import { BasicInput as Component } from './basic-input';

const meta: Meta = {
  component: Component,
  title: 'Components/Atoms/Inputs/Basic Input',
  argTypes: basicInputArgTypes,
};

export default meta;

export const BasicInput = {
  args: {
    label: 'Text input',
  },
};

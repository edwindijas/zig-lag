import type { Meta, StoryObj } from '@storybook/react-vite';

import { SigninForm as Component } from './signin';

const meta: Meta = {
  component: Component,
  title: 'Features/Auth/Components/SigninForm',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SigninForm: Story = {

};

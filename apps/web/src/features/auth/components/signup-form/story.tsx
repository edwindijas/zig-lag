import type { Meta, StoryObj } from '@storybook/react-vite';

import { SignupForm as Component } from './signup';

const meta: Meta = {
  component: Component,
  title: 'Features/Auth/Components/SignupForm',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SignupForm: Story = {

};

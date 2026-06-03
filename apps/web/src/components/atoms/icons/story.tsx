import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconStory } from './story-component';

const meta: Meta<typeof IconStory> = {
  component: IconStory,
  title: 'Components/Icons/Icon',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {};

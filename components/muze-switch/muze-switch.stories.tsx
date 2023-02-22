import { Meta, StoryObj } from '@storybook/react';
import MuzeSwitch from './muze-switch';

const meta: Meta<typeof MuzeSwitch> = {
  title: 'MuzeSwitch',
  component: MuzeSwitch,
};

export default meta;
type Story = StoryObj<typeof MuzeSwitch>;

export const Default: Story = {
  args: {
    defaultToOn: false,
  },
};

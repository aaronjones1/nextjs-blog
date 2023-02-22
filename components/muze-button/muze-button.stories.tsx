import { Meta, StoryObj } from '@storybook/react';
import MuzeButton from './muze-button';

const meta: Meta<typeof MuzeButton> = {
  title: 'MuzeButton',
  component: MuzeButton,
};

export default meta;
type Story = StoryObj<typeof MuzeButton>;

export const Default: Story = {
  args: {
    label: 'Button Label',
    variant: 'standard',
  },
};

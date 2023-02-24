import { Meta, StoryObj } from '@storybook/react';
import MuzeChip from './muze-chip';

const meta: Meta<typeof MuzeChip> = {
  title: 'MuzeChip',
  component: MuzeChip,
};

export default meta;
type Story = StoryObj<typeof MuzeChip>;

export const Default: Story = {
  args: {
    label: 'Chip Label',
  },
};

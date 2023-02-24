import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MuzeChipbox from './muze-chipbox';

const meta: Meta<typeof MuzeChipbox> = {
  title: 'MuzeChipbox',
  component: MuzeChipbox,
};

export default meta;
type Story = StoryObj<typeof MuzeChipbox>;

export const Default: Story = {
  args: {
    label: 'Writers',
    helperMessage: 'Helper message',
  },
};

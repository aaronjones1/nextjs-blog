import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MuzeSelect from './muze-select';

// export default {
//   title: 'MuzeSelect',
//   component: MuzeSelect,
// } as Meta<typeof MuzeSelect>;

const meta: Meta<typeof MuzeSelect> = {
  title: 'MuzeSelect',
  component: MuzeSelect
};

export default meta;
type Story = StoryObj<typeof MuzeSelect>;

// export const Default = () => <MuzeSelect />;

export const Default: Story = {
  args: {
    label: 'Genre',
    items: [
      'Mystery',
      'Sci-Fi',
      'Romance',
      'Comedy',
      'Fantasy'
    ]
  }
};
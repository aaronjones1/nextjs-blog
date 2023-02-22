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
    helperMessage: 'Helper message',
    items: [
      {
        id: 0,
        value: 'mystery',
        displayValue: 'Mystery'
      },
      {
        id: 1,
        value: 'scifi',
        displayValue: 'Sci-Fi'
      },
      {
        id: 2,
        value: 'romance',
        displayValue: 'Romance'
      },
      {
        id: 3,
        value: 'comedy',
        displayValue: 'Comedy'
      },
      {
        id: 4,
        value: 'fantasy',
        displayValue: 'Fantasy'
      },
    ],
    selectedItem: {
      id: 1,
      value: 'scifi',
      displayValue: 'Sci-Fi'
    }
  }
};
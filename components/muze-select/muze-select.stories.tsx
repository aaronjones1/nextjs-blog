import React from 'react';
import { Meta } from '@storybook/react';
import MuzeSelect from './muze-select';

export default {
  title: 'MuzeSelect',
  component: MuzeSelect,
} as Meta<typeof MuzeSelect>;

export const Default = () => <MuzeSelect />;
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import MuzeInput from './muze-input';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MuzeInput',
  component: MuzeInput,
} as ComponentMeta<typeof MuzeInput>;

export const Default = () => <MuzeInput />;
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MuzeInput from './muze-input';

// export default {
//   /* 👇 The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'MuzeInput',
//   component: MuzeInput,
// } as Meta<typeof MuzeInput>;

const meta: Meta<typeof MuzeInput> = {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MuzeInput',
  component: MuzeInput,
};

export default meta;
type Story = StoryObj<typeof MuzeInput>;

//export const Default = () => <MuzeInput label='First Name' helperMessage='Helper message' placeholder='Enter your first name' />;
export const Default: Story = {
  args: {
    label: 'Field Label',
    helperMessage: 'Helper message'
  }
};
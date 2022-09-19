import { Story } from '@storybook/react';
import React from 'react';
import ChatMessageTags, { ChatMessageTagsProps } from './ChatMessageTags';

export default {
  title: 'Guardian/Tags/ChatMessageTag',
};

const Template: Story<ChatMessageTagsProps> = (args) => (
  <div style={{ margin: 30 }}>
    <ChatMessageTags {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  tags: [
    {
      name: 'Tag',
      color: 'red',
    },
  ],
};
export const Multiple = Template.bind({});
Multiple.args = {
  tags: [
    {
      name: 'This is a long tag #1',
      color: 'red',
    },
    {
      name: 'This ia very very very very very very very very very very very very very very very long tag #2',
      color: 'blue',
    },
    {
      name: 'This ia tag #3',
      color: 'black',
    },
    {
      name: 'This ia tag #4',
      color: 'black',
    },
    {
      name: 'This ia tag #5',
      color: 'black',
    },
  ],
  openFrom: 'left',
};
export const MultipleWithScroll = Template.bind({});
MultipleWithScroll.args = {
  tags: [
    {
      name: 'This is a long tag #1',
      color: 'red',
    },
    {
      name: 'This ia very very very very very very very very very very very very very very very long tag #2',
      color: 'blue',
    },
    {
      name: 'This ia tag #3',
      color: 'black',
    },
    {
      name: 'This ia tag #4',
      color: 'black',
    },
    {
      name: 'This ia tag #5',
      color: 'black',
    },
    {
      name: 'This ia tag #6',
      color: 'black',
    },
  ],
  openFrom: 'left',
};

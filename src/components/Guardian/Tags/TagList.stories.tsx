import { Story } from '@storybook/react';
import React from 'react';
import { ChatMessageTagsProps } from './ChatMessageTags';
import TagList from './TagList';

export default {
  title: 'Guardian/Tags/List',
};

const Template: Story<ChatMessageTagsProps> = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    {
      name: 'Tag 1',
      color: 'red',
    },
    {
      name: 'Tag 2',
      color: 'blue',
    },
    {
      name: 'Tag 3',
      color: 'green',
    },
  ],
};

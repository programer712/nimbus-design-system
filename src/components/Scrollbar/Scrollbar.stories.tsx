import { Story } from '@storybook/react';
import React from 'react';
import Scrollbars from './Scrollbars';

export default {
  title: 'Components/Scrollbar',
};

const Template: Story<ScrollbarsProps> = (args) => (
  <Scrollbars {...args}>
    {[...Array(args.arraylength)].map((x, i) => (
      <p key={i}>{args.text}</p>
    ))}
  </Scrollbars>
);

export const Default = Template.bind({});
Default.args = {
  arraylength: 100,
  style: {
    height: '300px',
    width: '300px',
  },
  text: 'Hover to see scroll',
};

export interface ScrollbarsProps {
  className: string;
  text: string;
  style: { height: string; width: string };
  arraylength: number;
}

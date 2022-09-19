import { Story } from '@storybook/react';
import React from 'react';
import MLabel, { MLabelProps } from './MLabel';

export default {
  title: 'Components/Labels',
};

const Template: Story<MLabelProps> = (args) => <MLabel {...args}></MLabel>;

export const Default = Template.bind({});
Default.args = { backgroundColor: '#274C7A', children: 'This is a label' };

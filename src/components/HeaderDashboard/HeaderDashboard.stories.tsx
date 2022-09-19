import { Button } from '@material-ui/core';
import { Story } from '@storybook/react';
import React from 'react';
import HeaderDashboard from '.';

export default {
  title: 'Components/HeaderDashboard',
};

const Template: Story<any> = (args) => <HeaderDashboard {...args}></HeaderDashboard>;

export const UploadHeaderDashboard = Template.bind({});

UploadHeaderDashboard.args = {
  heading: 'Share Evidence',
  links: [
    { name: 'Step 1/2', href: '' },
    { name: 'Evidence Details', href: '' },
  ],
  moreLink: 'http://cellebrite.com',
  action: <Button />,
};

import { Story } from '@storybook/react';
import React from 'react';
import MBreadcrumbs from './MBreadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
};

const Template: Story<any> = (args) => <MBreadcrumbs {...args}></MBreadcrumbs>;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {
  links: [
    { name: 'Step 1/2', href: '' },
    { name: 'Evidence Details', href: '' },
  ],
};

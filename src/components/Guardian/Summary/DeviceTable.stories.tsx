import React from 'react';
import { DeviceTable, DeviceTableProps } from './DeviceTable';

export default {
  title: 'Guardian/Summary/DeviceTable',
};

const Template = (args: DeviceTableProps) => <DeviceTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  deviceInfo: {
    category: 'My category',
    isAvailable: true,
    // items: [],
    items: [
      {
        key: 'name',
        value: 'value',
      },
      {
        key: 'name',
        value: 'value',
      },
      {
        key: 'name',
        value: 'value',
      },
      {
        key: 'name',
        value: 'value',
      },
      {
        key: 'name',
        value: 'value',
      },
      {
        key: 'name',
        value: 'value',
      },
    ],
  },
  isLoading: false,
};

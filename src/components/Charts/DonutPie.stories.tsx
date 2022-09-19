import { Story } from '@storybook/react';
import React from 'react';
import { DonutRechart, DonutRechartProps } from './DonutRechart';

export default {
  title: 'components/Charts',
};

let Template: Story<DonutRechartProps> = (args) => <DonutRechart {...args} />;

export const PieChart = Template.bind({});
PieChart.args = {
  chartData: {
    count: 905,
    categories: [
      {
        name: 'Browser',
        value: 40,
      },
      {
        name: 'Utilities ',
        value: 50,
      },
      {
        name: 'Music',
        value: 90,
      },
      {
        name: 'Lifestyle',
        value: 344,
      },
      {
        name: 'Entertainment',
        value: 110,
      },
      {
        name: 'News & Books',
        value: 15,
      },
      {
        name: 'Finanace ',
        value: 35,
      },
      {
        name: 'Rest of apps ',
        value: 221,
      },
    ],
  },
  isLoading: false,
};

import { Story } from '@storybook/react';
import React from 'react';
import SortSelect, { SortSelectProps } from './SortSelect';

export default {
  title: 'Components/SortSelect',
};

const Template: Story<SortSelectProps> = (args) => <SortSelect {...args}></SortSelect>;

export const SelectSortAndOrderOption = Template.bind({});

const sortOptions = [
  {
    sortByValue: 'a',
    sortByText: 'Option A',
    sortOrderTooltip: { asc: 'Order by A asc', desc: 'Order by A desc' },
  },
  {
    sortByValue: 'b',
    sortByText: 'Option B',
    sortOrderTooltip: { asc: 'Order by B asc', desc: 'Order by B desc' },
  },
  {
    sortByValue: 'c',
    sortByText: 'Option C',
    sortOrderTooltip: { asc: 'Order by C asc', desc: 'Order by C desc' },
  },
];

SelectSortAndOrderOption.args = {
  label: 'Select a sorting option',
  disabled: false,
  sortBy: sortOptions[0].sortByValue,
  sortOrder: 'desc',
  options: sortOptions,
  onSortChange: () => {},
};

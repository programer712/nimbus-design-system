import MultiSelectFilter, { MultiSelectFilterProps } from './MultiSelectFilter';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Filters',
};

const Template: Story<MultiSelectFilterProps> = (args) => <MultiSelectFilter {...args} />;

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  filterName: 'Apps',
  primaryButtonText: 'Apply',
  secondaryButtonText: 'Cancel',
  onApply: (state) => console.log(state),
  items: [
    {
      id: 'App1',
      value: 'This is a very very very long App Name',
      count: 5,
    },
    {
      id: 'App2',
      value: 'App2',
      count: 5,
    },
    {
      id: 'App3',
      value: 'App3',
      count: 5,
    },
    {
      id: 'App4',
      value: 'App4',
      count: 10,
    },
    {
      id: 'App5',
      value: 'Custom App Render',
      count: 13,
      renderer: <span style={{ color: 'red' }}>Custom App Render</span>,
    },
  ],
};

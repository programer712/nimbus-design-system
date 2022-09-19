import ToggleCheckBoxFilter, { ToggleCheckBoxFilterProps } from './ToggleCheckBoxFilter';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Filters',
};

const Template: Story<ToggleCheckBoxFilterProps> = (args) => <ToggleCheckBoxFilter {...args} />;

export const ToggleFilter = Template.bind({});
ToggleFilter.args = {
  filterName: 'Toggle Filter CheckBox',
  checkBoxDescription: 'Toggle Filter CheckBox description',
  onApply: (state) => console.log(state),
};

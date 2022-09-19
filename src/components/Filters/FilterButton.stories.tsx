import { Story } from '@storybook/react';
import React from 'react';
import FilterButton, { FilterButtonProps } from './FilterButton';
import MStaticDateRangePicker from '../Datepicker/MStaticDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { LocalizationProvider } from '@material-ui/lab';
import { MButton } from '../index';
import { mStaticDateRangePickerProps } from './FilterButton.stories.constant';

export default {
  title: 'Components/Filters',
};

const Template: Story<FilterButtonProps> = (args) => <FilterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  filterName: 'Apps',
  selectedFilterText: '3 selected',
  isActive: true,
  filterNameSuffix: ':',
  children: 'Filter component',
};

export const RangeDatePickerFilter = Template.bind({});
RangeDatePickerFilter.args = {
  filterName: 'Time Range',
  selectedFilterText: '',
  children: (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MStaticDateRangePicker {...mStaticDateRangePickerProps}>
        <MButton variant="contained" color="primary">
          Apply
        </MButton>
        <MButton variant="outlined" color="primary">
          Cancel
        </MButton>
      </MStaticDateRangePicker>
    </LocalizationProvider>
  ),
  filterNameSuffix: '',
};

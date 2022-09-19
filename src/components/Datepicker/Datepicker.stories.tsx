import * as React from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { Story } from '@storybook/react';
import { Box } from '@material-ui/core';
import MStaticDateRangePicker, { MStaticDateRangePickerProps } from './MStaticDateRangePicker';

export default {
  title: 'Components/DatePickers',
};

const Template: Story<MStaticDateRangePickerProps> = (args: MStaticDateRangePickerProps) => (
  <Box data-testid="range-datepicker" sx={{ width: 626 }}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MStaticDateRangePicker {...args} />
    </LocalizationProvider>
  </Box>
);

export const StaticRangeDatePicker = Template.bind({});
StaticRangeDatePicker.args = {
  staticDateRangePickerProps: {
    onChange: (event) => {
      console.log(event);
    },
    value: [new Date(), new Date()],
    displayStaticWrapperAs: 'desktop',
    renderInput: () => <></>,
  },
};

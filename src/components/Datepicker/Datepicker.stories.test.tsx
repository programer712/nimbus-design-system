import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { StaticRangeDatePicker } from './Datepicker.stories';
import { MStaticDateRangePickerProps } from './MStaticDateRangePicker';
import { DateRange } from '@material-ui/lab/DateRangePicker/RangeTypes';

it('should render static date picker', () => {
  render(<StaticRangeDatePicker {...(StaticRangeDatePicker.args as MStaticDateRangePickerProps)} />);
  expect(screen.getByTestId('range-datepicker')).toBeInTheDocument();
});

it('should call console.log when calling onChange', () => {
  const spy = jest.spyOn(console, 'log');
  const e: DateRange<Date> = [new Date(), new Date()];
  StaticRangeDatePicker?.args?.staticDateRangePickerProps?.onChange(e);
  expect(spy).toBeCalledWith(e);
});

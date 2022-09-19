import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Default, RangeDatePickerFilter, CheckBoxFilter } from './FilterButton.stories';
import { FilterButtonProps } from './FilterButton';
import { DateRange } from '@material-ui/lab/DateRangePicker/RangeTypes';
import { mStaticDateRangePickerProps } from './FilterButton.stories.constant';

it('should renders filter button', () => {
  render(<Default {...(Default.args as FilterButtonProps)} />);
  expect(screen.getByRole('button')).toHaveTextContent('Apps: 3 selected');
});

it('should renders range date picker filter with buttons', () => {
  render(<RangeDatePickerFilter {...(RangeDatePickerFilter.args as FilterButtonProps)} />);
  expect(screen.getByRole('button')).toHaveTextContent('Time Range');
});

it('should call console.log when calling onChange', () => {
  const spy = jest.spyOn(console, 'log');
  const e: DateRange<Date> = [new Date(), new Date()];
  mStaticDateRangePickerProps?.staticDateRangePickerProps?.onChange(e);
  expect(spy).toBeCalledWith(e);
});

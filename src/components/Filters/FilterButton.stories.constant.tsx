import { MStaticDateRangePickerProps } from '../Datepicker/MStaticDateRangePicker';
import { sub } from 'date-fns';

export const mStaticDateRangePickerProps: MStaticDateRangePickerProps = {
  staticDateRangePickerProps: {
    onChange: (e) => {
      console.log(e);
    },
    value: [sub(new Date(), { months: 1 }), new Date()],
    displayStaticWrapperAs: 'desktop',
    renderInput: () => <></>,
    disableFuture: true,
    allowSameDateSelection: false,
  },
};

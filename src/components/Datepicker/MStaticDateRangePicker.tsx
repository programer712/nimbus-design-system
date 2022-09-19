import { StaticDateRangePicker, StaticDateRangePickerProps } from '@material-ui/lab';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return {
    datepicker: {
      padding: theme.spacing(1),
      '& .MuiPickersStaticWrapper-root': {
        boxShadow: 'none',
      },
    },
    buttonsFooter: {
      '& .MuiButton-root': {
        marginLeft: theme.spacing(1),
      },
    },
  };
});

export interface MStaticDateRangePickerProps {
  staticDateRangePickerProps: StaticDateRangePickerProps;
  children?: React.ReactNode;
}

export default function MStaticDateRangePicker({ staticDateRangePickerProps, children }: MStaticDateRangePickerProps) {
  const classes = useStyles();
  return (
    <div data-testid="date-range-picker" className={classes.datepicker}>
      <Box sx={{ mb: 1 }}>
        <StaticDateRangePicker {...staticDateRangePickerProps} />
      </Box>
      <Box className={classes.buttonsFooter} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        {children}
      </Box>
    </div>
  );
}

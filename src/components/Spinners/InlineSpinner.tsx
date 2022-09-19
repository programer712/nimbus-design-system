import React from 'react';
import { Box, CircularProgress, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InfoIcon } from '../../assets/icons';

export interface InlineSpinnerProps {
  tooltipText?: string;
  loadingText?: string;
  spinnerSize?: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.25),
    },
  },
  tooltip: {},
}));

function InlineSpinner({ loadingText, tooltipText, spinnerSize = 18 }: InlineSpinnerProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress data-testid="spinner" size={spinnerSize} />
      {loadingText && (
        <Typography data-testid="spinner-text" variant="body2">
          {loadingText}
        </Typography>
      )}
      {tooltipText && (
        <Tooltip data-testid="spinner-text-tooltip" title={tooltipText} arrow placement="top">
          <Box data-testid="spinner-text-tooltip-icon" sx={{ display: 'flex' }}>
            <InfoIcon />
          </Box>
        </Tooltip>
      )}
    </Box>
  );
}

export default InlineSpinner;

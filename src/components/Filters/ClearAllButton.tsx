import { MButton } from '../index';
import { Box, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&.MuiButton-root': {
      '&:hover': {
        background: 'none',
      },
    },
  },
}));

interface ClearAllButtonProps {
  clearAllButtonText: string;
  onClearAll: () => void;
  disabled?: boolean;
}

function ClearAllButton({
  onClearAll,
  clearAllButtonText = 'Clear all',
  disabled = false,
  ...other
}: ClearAllButtonProps) {
  const classes = useStyles();

  return (
    <MButton
      disabled={disabled}
      className={classes.root}
      disableRipple
      onClick={onClearAll}
      size="small"
      color="primary"
      variant="text"
      {...other}
    >
      <Typography display="inline" variant="body2">
        {clearAllButtonText}
      </Typography>
    </MButton>
  );
}

export default ClearAllButton;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { MTheme } from '../../theme';
import clsx from 'clsx';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme: MTheme) => {
  return {
    root: {
      height: 20,
      minWidth: 20,
      borderRadius: 8,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      justifyContent: 'center',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: theme.spacing(0.1, 1),
      color: theme.palette.grey[0],
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
    },
  };
});

function MLabel({ backgroundColor, children, className = '', ...other }: MLabelProps) {
  const classes = useStyles();

  return (
    <Box {...other} className={clsx(classes.root, className)} sx={{ backgroundColor }} component="span">
      {children}
    </Box>
  );
}

export interface MLabelProps {
  backgroundColor: string;
  children: React.ReactNode;
  className?: string;
}

export default MLabel;

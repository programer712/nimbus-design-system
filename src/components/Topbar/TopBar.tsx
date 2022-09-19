import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MTheme } from '../../theme';
import clsx from 'clsx';

export interface TopBarProps {
  children: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: theme.palette.grey[500_12],
    backdropFilter: 'blur(10px)',
  },
}));

function TopBar({ children, className = '' }: TopBarProps) {
  const classes = useStyles();

  return <Box className={clsx(classes.root, className)}>{children}</Box>;
}

export default TopBar;

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { varWrapEnter } from './variants';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface MotionContainerProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

function MotionContainer({ open, children, className, ...other }: MotionContainerProps) {
  const classes = useStyles();

  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Box>
  );
}

export default MotionContainer;

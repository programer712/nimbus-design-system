import { Dialog, PaperProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { MTheme } from '../../theme';
import { varFadeInUp } from './variants';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {},
  paper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface DialogAnimateProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

function DialogAnimate({ open = false, onClose, children, className, ...other }: DialogAnimateProps) {
  const classes = useStyles();
  const PaperComponent: any = motion.div;
  const PaperProps: any = { ...varFadeInUp };
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={PaperComponent}
          PaperProps={PaperProps}
          classes={{ paper: classes.paper }}
          className={clsx(classes.root, className)}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default DialogAnimate;

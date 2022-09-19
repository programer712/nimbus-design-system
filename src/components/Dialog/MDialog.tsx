import { DialogActions, DialogContent, IconButton, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { CloseIcon } from '../../assets/icons';

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    '& .MuiPaper-root': {
      padding: theme.spacing(4),
    },
  },
  dialogTitle: {
    margin: 0,
    padding: 0,
    width: '90%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(3),
  },
  dialogContent: {
    margin: `${theme.spacing(2.5)} 0`,
    padding: 0,
  },
  dialogActions: {
    margin: 0,
    padding: 0,
  },
}));

export interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

function MDialog({ open, onClose, title, subtitle, content, actions, maxWidth = false }: ConfirmationDialogProps) {
  const classes = useStyles();
  return (
    <Dialog onClose={onClose} open={open} className={classes.dialogRoot} maxWidth={maxWidth}>
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6" data-testid="dialog-title">
          {title}
        </Typography>
        {subtitle && (
          <Typography mt={1.25} data-testid="dialog-subtitle">
            {subtitle}
          </Typography>
        )}
        <IconButton onClick={onClose} className={classes.closeButton} data-testid="dialog-close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent} data-testid="dialog-content">
        {content}
      </DialogContent>
      {actions && (
        <DialogActions className={classes.dialogActions} data-testid="dialog-actions">
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default MDialog;

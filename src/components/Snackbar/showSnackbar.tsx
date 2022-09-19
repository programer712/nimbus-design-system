import React from 'react';
import { IconButton } from '@material-ui/core';
import { Icon } from '@iconify/react';
import { OptionsObject, SnackbarKey, SnackbarMessage, VariantType } from 'notistack';
import closeFill from '@iconify-icons/eva/close-fill';

interface SnackBar {
  message: SnackbarMessage;
  variant: VariantType;
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
  closeSnackbar: (key?: SnackbarKey) => void;
}

const showSnackbar = ({ message, variant, enqueueSnackbar, closeSnackbar }: SnackBar): SnackbarKey => {
  return enqueueSnackbar(message, {
    variant,
    action: (key) => (
      <IconButton onClick={() => closeSnackbar(key)} size="small" color="inherit">
        <Icon icon={closeFill} width="24" height="24" />
      </IconButton>
    ),
  });
};

export default showSnackbar;

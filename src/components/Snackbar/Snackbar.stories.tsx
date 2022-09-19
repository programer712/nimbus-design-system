import { Story } from '@storybook/react';
import React from 'react';
import { MButton } from '../index';
import { ButtonProps } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import showSnackbar from './showSnackbar';

export default {
  title: 'Components/Snackbar',
};
const snackBarStory = (args: ButtonProps) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <MButton
      {...args}
      onClick={() =>
        showSnackbar({
          message: 'test',
          variant: 'success',
          enqueueSnackbar,
          closeSnackbar,
        })
      }
    >
      Click for snackbar
    </MButton>
  );
};

const Template: Story<ButtonProps> = snackBarStory;

export const Default = Template.bind({});

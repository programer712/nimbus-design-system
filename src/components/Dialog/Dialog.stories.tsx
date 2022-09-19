import { Button, Typography } from '@material-ui/core';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import MDialog from './MDialog';

export default {
  title: 'Components/Dialogs',
};

const Template: Story<any> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <MDialog
      {...args}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      actions={
        <div>
          <Button variant="contained">Yes</Button>
          <Button
            color="primary"
            data-testid="dialog-action-close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            No
          </Button>
        </div>
      }
    ></MDialog>
  );
};

export const ConfirmationDialog = Template.bind({});

ConfirmationDialog.args = {
  open: true,
  title: 'Are you sure?',
  subtitle: 'Asking again...',
  content: <Typography>If you are deleting the user, the action cannot be undone.</Typography>,
};

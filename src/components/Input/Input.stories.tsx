import { Story } from '@storybook/react';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import React from 'react';

export default {
  title: 'Components/Inputs',
};

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const OutlinedTextField = Template.bind({});
OutlinedTextField.args = {
  required: false,
  label: 'Label',
  defaultValue: 'Default Value',
};

export const MultiLineTextField = Template.bind({});
MultiLineTextField.args = {
  rows: 4,
  fullWidth: true,
  multiline: true,
  label: 'Multiline',
  defaultValue: 'Default Value',
};

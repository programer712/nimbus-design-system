import MButton from './MButton';
import { ButtonProps } from '@material-ui/core';
import { Story } from '@storybook/react';
import React from 'react';
import { ArrowIcon } from '../../assets/icons/ArrowIcon';

export default {
  title: 'Components/Buttons',
};

const Template: Story<ButtonProps> = (args) => <MButton {...args}>Content</MButton>;

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: 'contained',
  color: 'primary',
  disabled: false,
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  disabled: false,
  size: 'medium',
  color: 'inherit',
  startIcon: <ArrowIcon />,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
  color: 'primary',
  disabled: false,
};

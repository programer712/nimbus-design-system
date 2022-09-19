import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { Button, ButtonProps } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import { MTheme } from '../../theme';
import { ButtonPropsVariantOverrides, ButtonTypeMap } from '@material-ui/core/Button/Button';
import { OverridableStringUnion } from '@material-ui/types';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme: MTheme) => {
  const styleContained = (color: string) => {
    return {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark,
      },
    };
  };

  const styleOutlined = (color: string) => {
    return {
      color: theme.palette[color].main,
      border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
      '&:hover': {
        border: `1px solid ${theme.palette[color].main}`,
        backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
      },
    };
  };

  const textOutlined = (color: string) => {
    return {
      color: theme.palette[color].main,
      '&:hover': {
        backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
      },
    };
  };
  return {
    // Contained
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    containedWhite: {
      color: theme.palette.getContrastText(theme.palette.common.white),
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.grey[300],
      },
    },
    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    // Text
    textInfo: textOutlined('info'),
    textSuccess: textOutlined('success'),
    textWarning: textOutlined('warning'),
    textError: textOutlined('error'),
  };
});

// ----------------------------------------------------------------------

interface MButtonProps extends Omit<ButtonProps, 'color' | 'variant'> {
  color: OverridableStringUnion<
    Record<'primary' | 'info' | 'warning' | 'inherit' | 'success' | 'secondary' | 'error', true>,
    ButtonPropsVariantOverrides
  >;
  variant: OverridableStringUnion<Record<'text' | 'outlined' | 'contained', true>, ButtonPropsVariantOverrides>;
}

const MButton = forwardRef<HTMLButtonElement, Partial<MButtonProps>>(
  ({ color = 'primary', variant = 'text', children, className, ...other }, ref) => {
    const classes: ClassNameMap<
      | 'textError'
      | 'outlinedInfo'
      | 'outlinedError'
      | 'containedWhite'
      | 'outlinedSuccess'
      | 'textSuccess'
      | 'containedInfo'
      | 'textInfo'
      | 'containedSuccess'
      | 'containedError'
      | 'outlinedWarning'
      | 'textWarning'
      | 'containedWarning'
    > & { [key: string]: string } = useStyles();

    if (color === 'inherit' || color === 'primary' || color === 'secondary') {
      return (
        <Button ref={ref} color={color} variant={variant} className={className} {...other}>
          {children}
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        className={clsx(
          classes[variant],
          {
            [classes[`${variant}${capitalize(color)}`]]: color,
          },
          className
        )}
        {...other}
      >
        {children}
      </Button>
    );
  }
);

export default MButton;

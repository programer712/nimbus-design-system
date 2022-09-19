import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function ChevronIcon(props?: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M4.75 7.125L9.5 11.875L14.25 7.125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  );
}

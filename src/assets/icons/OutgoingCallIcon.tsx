import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function OutgoingCallIcon(props?: SvgIconProps) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.657 19.03v1.993l7.898.008-8.605 8.605 1.414 1.414 8.605-8.605-.007 7.898h2.009V19.03H17.657z"
        fill="#44AF69"
      />
    </svg>
  );
}

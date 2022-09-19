import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function IncomingCallIcon(props?: SvgIconProps) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M29.657 29.97v-1.993l-7.898-.008 8.605-8.605-1.414-1.414-8.606 8.605.007-7.898h-2.008V29.97h11.314z"
        fill="#0064CC"
      />
    </svg>
  );
}

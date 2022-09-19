import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function MissedCallIcon(props?: SvgIconProps) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.409 6l4.295-4.287a1.003 1.003 0 00-1.418-1.42L6 4.59 1.714.294A1.003 1.003 0 10.296 1.713L4.59 5.999.296 10.286a1 1 0 000 1.418.999.999 0 001.418 0L6 7.408l4.286 4.296a.999.999 0 001.418 0 1 1 0 000-1.418L7.41 5.999z"
        fill="#D03639"
      />
    </svg>
  );
}

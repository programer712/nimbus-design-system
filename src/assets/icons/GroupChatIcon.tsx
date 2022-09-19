import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function GroupChatIcon(props?: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <rect opacity="0.01" width="24" height="24" fill="white" />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        fill="white"
      />
      <path
        d="M17 13C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7C15.3431 7 14 8.34315 14 10C14 11.6569 15.3431 13 17 13Z"
        fill="white"
      />
      <path
        d="M21 20C21.5523 20 22 19.5523 22 19C21.9984 17.0933 20.9125 15.3535 19.2003 14.5145C17.4882 13.6754 15.4479 13.8831 13.94 15.05C11.9371 13.0549 8.93071 12.4605 6.31923 13.5431C3.70774 14.6258 2.00382 17.173 2 20C2 20.5523 2.44772 21 3 21H15C15.5523 21 16 20.5523 16 20"
        fill="white"
      />
    </SvgIcon>
  );
}

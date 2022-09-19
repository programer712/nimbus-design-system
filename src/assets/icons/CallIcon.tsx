import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function CallIcon({ fill = '#0064CC', ...props }: SvgIconProps) {
  return (
    <SvgIcon width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.921 22.5C7.712 22.488.25 15.025.238 5.816A4.983 4.983 0 015.221.833c.28-.002.56.023.835.076.265.039.527.104.78.195.362.127.63.436.704.812l1.484 6.5c.081.359-.025.734-.282.997-.14.152-.151.162-1.484.856a10.735 10.735 0 005.276 5.297c.704-1.343.715-1.354.866-1.495.264-.257.639-.363.997-.281l6.5 1.484c.364.084.66.35.78.704a4.7 4.7 0 01.271 1.614 4.983 4.983 0 01-5.027 4.908z"
        fill={fill}
      />
    </SvgIcon>
  );
}

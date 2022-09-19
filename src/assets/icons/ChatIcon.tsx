import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export function ChatIcon({ fill = '#0064CC', ...props }: SvgIconProps) {
  return (
    <SvgIcon width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.875 3.6665V13.2915C20.875 14.804 19.6375 16.0415 18.125 16.0415H5.75L0.25 21.5415V3.6665C0.25 2.154 1.4875 0.916504 3 0.916504H18.125C19.6375 0.916504 20.875 2.154 20.875 3.6665ZM23.6248 6.41663H24.9998C26.5123 6.41663 27.7498 7.65413 27.7498 9.16663V28.4166L22.2498 22.9166H8.49976C6.98726 22.9166 5.74976 21.6791 5.74976 20.1666V18.7916H22.2498C23.006 18.7916 23.6248 18.1729 23.6248 17.4166V6.41663Z"
        fill={fill}
      />
    </SvgIcon>
  );
}

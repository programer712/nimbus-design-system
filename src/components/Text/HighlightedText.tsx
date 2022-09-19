import { Typography, TypographyProps } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

export interface HighlightedTextProps extends TypographyProps {
  highlight: string;
  highlightClass: string;
  children: string;
}

function HighlightedText({ highlight, highlightClass, children, ...otherProps }: HighlightedTextProps): JSX.Element {
  const matches = children.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <Typography {...otherProps}>
      {matches.map((match, index) => (
        <span key={index} className={clsx(match.toLowerCase() === highlight.toLowerCase() && highlightClass)}>
          {match}
        </span>
      ))}
    </Typography>
  );
}

export default HighlightedText;

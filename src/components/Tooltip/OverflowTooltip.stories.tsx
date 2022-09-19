import { Typography } from '@material-ui/core';
import { Story } from '@storybook/react';
import React from 'react';
import OverflowTooltip from './OverflowTooltip';

export default {
  title: 'Components/Tooltip',
};

export const LongText = () => {
  return (
    <>
      <OverflowTooltip
        maxWidth={97}
        placement="top"
        title={'This is very very very very very very very very very very very very very very very long'}
        arrow
      >
        <Typography noWrap variant="caption">
          {'This is very very very very very very very very very very very very very very very long'}
        </Typography>
      </OverflowTooltip>
    </>
  );
};

export const ShortText = () => {
  return (
    <>
      <OverflowTooltip maxWidth={97} placement="top" title={'This is short text'} arrow>
        <Typography noWrap variant="caption">
          {'This is short text'}
        </Typography>
      </OverflowTooltip>
    </>
  );
};

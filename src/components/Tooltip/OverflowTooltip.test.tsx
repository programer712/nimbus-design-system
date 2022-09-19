import { Typography } from '@material-ui/core';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import OverflowTooltip from './OverflowTooltip';

it('should display tooltip when hovering over long text', () => {
  render(
    <OverflowTooltip placement="top" title={'This ia very very very long'} arrow>
      <Typography noWrap variant="caption">
        {'This ia very very very long'}
      </Typography>
    </OverflowTooltip>
  );

  fireEvent.mouseOver(screen.getByTestId('content-container'));
  expect(screen.getByText('This ia very very very long')).toBeInTheDocument();
});

it('should not display tooltip when hovering over short text', () => {
  render(
    <OverflowTooltip placement="top" title={'short text'} arrow>
      <Typography noWrap variant="caption">
        {'short text'}
      </Typography>
    </OverflowTooltip>
  );

  expect(screen.getByText('short text')).toBeInTheDocument();
  fireEvent.mouseOver(screen.getByTestId('content-container'));
  expect(screen.getAllByText('short text')).toHaveLength(1);
});

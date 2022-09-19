import { render, screen } from '@testing-library/react';
import React from 'react';
import { LongText, ShortText } from './OverflowTooltip.stories';

it('should display tooltip when hovering over long text', () => {
  render(<LongText />);
  expect(
    screen.getByText('This is very very very very very very very very very very very very very very very long')
  ).toBeInTheDocument();
});

it('should not display tooltip when hovering over short text', () => {
  render(<ShortText />);
  expect(screen.getByText('This is short text')).toBeInTheDocument();
  expect(screen.getAllByText('This is short text')).toHaveLength(1);
});

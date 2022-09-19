import { render, screen } from '@testing-library/react';
import React from 'react';
import { Multiple, MultipleWithScroll, Single } from './ChatMessageTags.stories';
import { ChatMessageTagsProps } from './ChatMessageTags';

it('should display single chat message tag', () => {
  render(<Single {...(Single.args as ChatMessageTagsProps)} />);
  expect(screen.getByText('Tag'));
});

it('should display multiple chat message tag', () => {
  render(<Multiple {...(Multiple.args as ChatMessageTagsProps)} />);
  expect(screen.getByText('This is a long tag #1'));
  expect(screen.getByText(`+4`));
});
it('should display multiple with scroll chat message tag', () => {
  render(<MultipleWithScroll {...(MultipleWithScroll.args as ChatMessageTagsProps)} />);
  expect(screen.getByText('This is a long tag #1'));
  expect(screen.getByText(`+5`));
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import { ChatMessageTagsProps } from './ChatMessageTags';
import { Default } from './TagList.stories';

it('should display 3 tags', () => {
  render(<Default {...(Default.args as ChatMessageTagsProps)} />);
  expect(screen.getByText('Tag 1'));
  expect(screen.getByText('Tag 2'));
  expect(screen.getByText('Tag 3'));
});

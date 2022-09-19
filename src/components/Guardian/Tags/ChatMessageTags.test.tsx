import { waitFor, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ChatMessageTags from './ChatMessageTags';

it('should display only one tag', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
  ];
  render(<ChatMessageTags tags={tags} />);
  const tag = screen.getByText('tag1');
  expect(tag).toBeInTheDocument();
  expect(tag.parentElement.parentElement).toHaveStyle({ backgroundColor: 'red' });
  expect(screen.queryByText('+')).toBeNull();
});

it('should display first tag name and the amount of extra tags', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
    {
      color: 'blue',
      name: 'tag2',
    },
    {
      color: 'green',
      name: 'tag3',
    },
  ];
  render(<ChatMessageTags tags={tags} />);
  expect(screen.getByText('tag1')).toBeInTheDocument();
  expect(screen.getByText('+2')).toBeInTheDocument();
});

it('should show tag list when hovering over plus number of additional tags label', async () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
    {
      color: 'blue',
      name: 'tag2',
    },
    {
      color: 'green',
      name: 'tag3',
    },
  ];
  render(<ChatMessageTags tags={tags} />);
  fireEvent.mouseOver(screen.getByText('+2'));
  await waitFor(() => screen.getByText('tag2'));
  expect(screen.getByText('tag3')).toBeInTheDocument();
});

it('should show tooltip when hovering over long text', () => {
  const tags = [
    {
      color: 'red',
      name: 'This ia very very very very very very very very very long text',
    },
  ];

  render(<ChatMessageTags tags={tags} />);
  fireEvent.mouseOver(screen.getByTestId('tag-content'));
  expect(screen.getByText('This ia very very very very very very very very very long text')).toBeInTheDocument();
});

it('shouldnt show tooltip when hovering over short text', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
  ];

  render(<ChatMessageTags tags={tags} />);
  fireEvent.mouseOver(screen.getByTestId('tag-content'));
  expect(screen.getAllByText('tag1')).toHaveLength(1);
});

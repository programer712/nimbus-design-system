import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { InfiniteScrollList } from './InfiniteScrollList.stories';

it('should render infinite scroll list with expected args', () => {
  render(<InfiniteScrollList {...InfiniteScrollList.args}></InfiniteScrollList>);
});

it('should call console.log when calling isItemLoaded', () => {
  const spy = jest.spyOn(console, 'log');
  InfiniteScrollList.args.infiniteLoader.isItemLoaded();
  expect(spy).toBeCalledWith('checking if is item loaded...');
});

it('should call console.log when calling loadMoreItems', () => {
  const spy = jest.spyOn(console, 'log');
  InfiniteScrollList.args.infiniteLoader.loadMoreItems();
  expect(spy).toBeCalledWith('loading more items...');
});

it('should render list item when calling itemRenderer', () => {
  render(InfiniteScrollList.args.list.itemRenderer({ index: 0 }));
  expect(screen.getByText('List item 1')).toBeInTheDocument();
});

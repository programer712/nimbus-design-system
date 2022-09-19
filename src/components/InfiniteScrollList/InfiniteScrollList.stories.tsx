import { Story } from '@storybook/react';
import React from 'react';
import InfiniteScrollListComponent from './InfiniteScrollList';

export default {
  title: 'Components/InfiniteScrollList',
};

const Template: Story<any> = (args) => <InfiniteScrollListComponent {...args}></InfiniteScrollListComponent>;

export const InfiniteScrollList = Template.bind({});

InfiniteScrollList.args = {
  infiniteLoader: {
    watchList: [],
    isItemLoaded: () => {
      console.log('checking if is item loaded...');
      return true;
    },
    itemCount: 100,
    loadMoreItems: async () => {
      console.log('loading more items...');
    },
    minimumBatchSize: 10,
    threshold: 50,
  },
  list: {
    itemCount: 100,
    itemSize: 30,
    itemRenderer: ({ index, style }) => <div style={style}>List item {index + 1}</div>,
  },
};

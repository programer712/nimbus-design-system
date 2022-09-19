import React, { CSSProperties, useEffect, useRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

function InfiniteScrollList({
  infiniteLoader,
  list,
}: {
  infiniteLoader: {
    watchList: unknown[];
    isItemLoaded: (index: number) => boolean;
    itemCount: number;
    loadMoreItems: (startIndex: number, stopIndex: number) => Promise<void>;
    minimumBatchSize: number;
    threshold: number;
  };
  list: {
    itemCount: number;
    itemSize: number;
    itemRenderer: React.ComponentType<{
      index: number;
      style: CSSProperties;
      data: unknown;
      isScrolling?: boolean;
    }>;
  };
}): JSX.Element {
  const listRef: React.RefObject<any> =
    useRef<{
      _listRef: { scrollTo(x: number, y: number): void };
      resetloadMoreItemsCache: (autoReload?: boolean) => void;
    }>(null);

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (listRef.current && hasMountedRef.current) {
      listRef.current.resetloadMoreItemsCache(true);
      // eslint-disable-next-line no-underscore-dangle
      listRef.current._listRef.scrollTo(0, 0);
    }
    hasMountedRef.current = true;
  }, [...infiniteLoader.watchList]);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader
          ref={listRef}
          itemCount={infiniteLoader.itemCount}
          loadMoreItems={infiniteLoader.loadMoreItems}
          isItemLoaded={infiniteLoader.isItemLoaded}
          minimumBatchSize={infiniteLoader.minimumBatchSize}
          threshold={infiniteLoader.threshold}
        >
          {({ onItemsRendered, ref }) => (
            <List
              height={height}
              itemCount={list.itemCount}
              itemSize={list.itemSize}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={width}
            >
              {list.itemRenderer}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default InfiniteScrollList;

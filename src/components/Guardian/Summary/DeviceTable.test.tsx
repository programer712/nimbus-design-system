import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Default } from './DeviceTable.stories';

describe('Device Table test', () => {
  it('should render content', () => {
    render(<Default {...Default.args}></Default>);
    expect(screen.getAllByTestId('device-table-header').length).toEqual(2);
    expect(screen.getByText('General info')).toBeTruthy();
  });
  it('should render Skeleton', () => {
    render(<Default {...{ ...Default.args, isLoading: true }}></Default>);
   
    expect(screen.getAllByTestId('device-header-skeleton').length).toEqual(2);
  });
});

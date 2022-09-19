import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Default } from './ExtractionSummary.stories';

describe('Extraction Summary test', () => {
  it('should render content', () => {
    render(<Default {...Default.args}></Default>);
    expect(screen.getByText('Extraction summary')).toBeTruthy();
    expect(screen.getAllByTestId('summary-icon').length).toEqual(2);
  });
  it('should render Skeleton', () => {
    render(<Default {...{ ...Default.args, isLoading: true }}></Default>);
    expect(screen.getAllByTestId('summary-circular-spinner').length).toEqual(2);
  });
});

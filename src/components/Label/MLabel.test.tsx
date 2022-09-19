import { render, screen } from '@testing-library/react';
import React from 'react';
import MLabel from './MLabel';

it('should display label with color', () => {
  const labelText = 'this is a label';
  const backgroundColor = 'red';
  render(<MLabel backgroundColor={backgroundColor}>{labelText}</MLabel>);
  const label = screen.getByText('this is a label');
  expect(label).toHaveStyle({ backgroundColor: 'red' });
});

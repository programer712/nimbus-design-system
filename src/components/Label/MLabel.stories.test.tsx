import { render, screen } from '@testing-library/react';
import React from 'react';
import { MLabelProps } from './MLabel';
import { Default } from './MLabel.stories';

it('should display default label', () => {
  render(<Default {...(Default.args as MLabelProps)} />);
  const label = screen.getByText('This is a label');
  expect(label).toHaveStyle({ backgroundColor: '#274C7A' });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { MButton } from '../index';

it('should render an error button', () => {
  render(<MButton color="error">Content</MButton>);
  expect(screen.getByRole('button')).toHaveTextContent('Content');
});

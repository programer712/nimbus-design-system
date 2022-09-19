import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { MultiLineTextField, OutlinedTextField } from './Input.stories';

it('should render outlined text field', () => {
  render(<OutlinedTextField {...OutlinedTextField.args}></OutlinedTextField>);
  expect(screen.getByDisplayValue('Default Value')).toBeTruthy();
});

it('should render multiline text field', () => {
  render(<MultiLineTextField {...MultiLineTextField.args}></MultiLineTextField>);
  expect(screen.getByDisplayValue('Default Value'));
});

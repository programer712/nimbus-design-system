import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ToggleCheckBoxFilterProps } from './ToggleCheckBoxFilter';
import { ToggleFilter } from './ToggleCheckBoxFilter.stories';

it('should render toggle filter story', () => {
  const args: ToggleCheckBoxFilterProps = ToggleFilter.args as ToggleCheckBoxFilterProps;
  render(<ToggleFilter {...args} />);
  expect(screen.getByRole('button')).toHaveTextContent(args.filterName);
});

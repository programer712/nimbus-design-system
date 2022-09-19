import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MultiSelectFilterProps } from './MultiSelectFilter';
import { MultiSelect } from './MultiSelectFilter.stories';

it('should render multi select filter story', () => {
  const args: MultiSelectFilterProps = MultiSelect.args as MultiSelectFilterProps;
  render(<MultiSelect {...args} />);
  expect(screen.getByRole('button')).toHaveTextContent(args.filterName);
});

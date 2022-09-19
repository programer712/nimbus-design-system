import { render } from '@testing-library/react';
import React from 'react';
import { HighlightedTextVariant } from './HighlightedText.stories';

it('should render highlighted text', () => {
  const { container } = render(<HighlightedTextVariant {...HighlightedTextVariant.args} />);
  expect(container).toBeInTheDocument();
});

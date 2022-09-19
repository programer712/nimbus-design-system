import React from 'react';
import { render } from '@testing-library/react';
import { TwoLineAvatar } from './TwoLinesDescriptionAvatar.stories';
import TwoLineDescriptionAvatar from './index';
import TwoLineDescriptionAvatarFromFile from './TwoLineDescriptionAvatar';
import GuardianIcon from '../../assets/icons/icon.png';

it('should render without errors and displays the correct text', () => {
  const { container } = render(
    <TwoLineAvatar children="EX" primaryText="primary text" secondaryText="secondary text" />
  );

  expect(container).toBeInTheDocument();
});

it('should display the correct text given correct the input', () => {
  const childText = 'EX';
  const { getByText, getByTestId } = render(
    <TwoLineAvatar children={childText} primaryText="primary text" secondaryText="secondary text"></TwoLineAvatar>
  );

  const primaryTextContent = 'primary text';
  const secondaryTextContent = 'secondary text';

  expect(getByText(childText)).toBeInTheDocument();
  expect(getByTestId('primaryText')).toHaveTextContent(primaryTextContent);
  expect(getByTestId('secondaryText')).toHaveTextContent(secondaryTextContent);
});

it('should display the correct avatar and text given correct the input', () => {
  const { getByTestId } = render(
    <TwoLineAvatar icon={GuardianIcon} primaryText="primary text" secondaryText="secondary text"></TwoLineAvatar>
  );

  expect(getByTestId('avatar')).toBeInTheDocument();
});

it('index file exports correctly', () => {
  expect(TwoLineDescriptionAvatar).toBe(TwoLineDescriptionAvatarFromFile);
});

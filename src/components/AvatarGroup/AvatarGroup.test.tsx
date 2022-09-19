import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import React from 'react';
import { GroupAvatar as Template } from './AvatarGroup.stories';
import AvatarGroup from './AvatarGroup';

it('should render with no errors', () => {
  const { container } = render(<AvatarGroup {...Template.args} />);
  expect(container).toBeInTheDocument();
});

it('should register a click event when handleClickOnExtraAvatars is passed', () => {
  const dataTestId = 'group-extra-avatar';
  render(<AvatarGroup {...Template.args} />);
  fireEvent.click(screen.getByTestId(dataTestId));
});

it('should should throw error if a fragment is passed as child', () => {
  global.console = {
    error: jest.fn(),
  };

  render(
    <AvatarGroup {...Template.args}>
      <>test fragment</>
    </AvatarGroup>
  );
  expect(global.console.error).toHaveBeenCalledTimes(1);
});

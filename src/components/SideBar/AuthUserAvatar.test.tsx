import AuthUserAvatar from './AuthUserAvatar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const textPrimary = 'John Doe';
const textSecondary = 'Logout';

const Avatar = (
  <Router>
    <AuthUserAvatar
      avatarProps={{ src: 'https://picsum.photos/200' }}
      primaryText={textPrimary}
      secondaryText={textSecondary}
    />
  </Router>
);

describe('AuthUserAvatar test', () => {
  it('should render an avatar with picture, primary and secondary text', () => {
    render(Avatar);
    const secondaryText = screen.getByTestId('textSecondary');
    const primaryText = screen.getByTestId('textPrimary');

    expect(primaryText).toBeInTheDocument();
    expect(secondaryText).toBeInTheDocument();
    expect(primaryText).toHaveTextContent(textPrimary);
    expect(secondaryText).toHaveTextContent(textSecondary);
  });
});

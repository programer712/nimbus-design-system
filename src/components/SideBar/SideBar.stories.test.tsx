import { WithAuthAndLogo } from './SideBar.stories';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

it('should render the SideBarWithAuthAndLogo without errors', () => {
  render(
    <Router>
      <WithAuthAndLogo />
    </Router>
  );
});

import NavItem from './NavItem';
import { render, screen, fireEvent, waitForElementToBeRemoved, cleanup } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { ChatIcon } from '../../assets/icons';
import { createMemoryHistory } from 'history';

const navItemId = 'navItem-id';
const NavItemWithRouter = (
  <BrowserRouter>
    <NavItem data-testid={navItemId} title="title" href="/some/path" icon={ChatIcon} info="secret" />
  </BrowserRouter>
);

describe('NavItem test', () => {
  it('should render the NavItem without errors and display the title', () => {
    render(NavItemWithRouter);

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should render the children if passed', () => {
    const NavItemWithChildren = (
      <BrowserRouter>
        <NavItem data-testid={navItemId} title="title" href="/some/path" icon={ChatIcon} info="💬">
          <div data-testid="test-child">Test child</div>
        </NavItem>
      </BrowserRouter>
    );
    render(NavItemWithChildren);

    fireEvent.click(screen.getByTestId(navItemId));
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('shows info only while hovering', async () => {
    render(NavItemWithRouter);
    fireEvent.mouseEnter(screen.getByTestId(navItemId));
    const info = await screen.getByText('secret');
    expect(info).toBeInTheDocument();
    waitForElementToBeRemoved(info)
      .then(() => expect(info).not.toBeInTheDocument())
      .catch((err) => console.log(err));

    fireEvent.mouseLeave(screen.getByTestId(navItemId));
  });
});

it('can add route to history', () => {
  cleanup();
  const history = createMemoryHistory();
  const somePath = '/some/path';
  history.push(somePath);

  render(
    <Router history={history}>
      <NavItem data-testid={navItemId} title="title" href={somePath} icon={ChatIcon} info="secret" />
    </Router>
  );

  expect(history.location.pathname.includes(somePath)).toBe(true);
});

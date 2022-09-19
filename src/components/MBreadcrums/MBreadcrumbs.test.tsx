import { cleanup, render } from '@testing-library/react';
import { Breadcrumbs } from './MBreadcrumbs.stories';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ArrowIcon, CogIcon } from '../../assets/icons';

afterEach(cleanup);

it('should render without errors when provided the minimum required props', () => {
  const { asFragment, container } = render(
    <BrowserRouter>
      <Breadcrumbs
        key={'testId'}
        links={[
          { name: 'Step 1', href: '', icon: <CogIcon /> },
          { name: 'Step 2', href: '', icon: <ArrowIcon /> },
        ]}
        className="random-string-name"
      />
    </BrowserRouter>
  );

  expect(container).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

it('should render without errors when activeLast is true', () => {
  const { asFragment, container } = render(
    <BrowserRouter>
      <Breadcrumbs
        activeLast
        links={[
          { name: 'Step 1', href: '', icon: <CogIcon /> },
          { name: 'Step 2', href: '', icon: <ArrowIcon /> },
        ]}
        className="random-string-name"
      />
    </BrowserRouter>
  );

  expect(container).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

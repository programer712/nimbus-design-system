import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Default } from './Snackbar.stories';
import { ButtonProps } from '@material-ui/core';
import NotistackProvider from '../../providers/NotistackProvider';
import { ThemeConfig } from '../../theme';

it('should show snackbar in light mode', async () => {
  render(
    <ThemeConfig isLightMode>
      <NotistackProvider>
        <Default {...(Default.args as ButtonProps)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  await waitFor(() => expect(screen.getByText('test')).toBeInTheDocument());
});
it('should show snackbar in dark mode', async () => {
  render(
    <ThemeConfig isLightMode={false}>
      <NotistackProvider>
        <Default {...(Default.args as ButtonProps)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  await waitFor(() => expect(screen.getByText('test')).toBeInTheDocument());
});

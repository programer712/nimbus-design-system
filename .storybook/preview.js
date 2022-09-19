import '../src/assets/fonts/index.css';
import 'simplebar/src/simplebar.css';
import { ThemeConfig } from '../src';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import NotistackProvider from '../src/providers/NotistackProvider';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
export const decorators = [
  (Story) => (
    <ThemeConfig isLightMode>
      <NotistackProvider>
        <Router>
          <Story />
        </Router>
      </NotistackProvider>
    </ThemeConfig>
  ),
];

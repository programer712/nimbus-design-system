import { CssBaseline, Direction, Transitions } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Components } from '@material-ui/core/styles/components';
import { Typography, TypographyOptions } from '@material-ui/core/styles/createTypography';
import { StyledEngineProvider } from '@material-ui/styled-engine';
import React, { ReactNode, useMemo } from 'react';
import borderRadius, { ShapeOptions } from './borderRadius';
import breakpointsX from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette, { AdditionalPaletteOptions, PaletteOptions, PaletteOptionsIndexed } from './palette';
import typography from './typography';
import { Spacing } from '@material-ui/core/styles/createSpacing';
import { Breakpoints, BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';
import { ZIndex } from '@material-ui/core/styles/zIndex';
import { Mixins } from '@material-ui/core/styles/createMixins';
import shadows, { MShadows } from './shadows';

export interface MTheme {
  shape: ShapeOptions;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  components?: Components;
  palette: PaletteOptions & PaletteOptionsIndexed & AdditionalPaletteOptions;
  shadows: MShadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

export interface MThemeOptions {
  palette: PaletteOptions;
  typography: TypographyOptions;
  shape: ShapeOptions;
  breakpoints: Partial<BreakpointsOptions>;
  components: Components;
  spacing: Spacing;
  transitions: Transitions;
}

export interface ThemeConfigProps {
  children: ReactNode;
  isLightMode: boolean;
}

export function ThemeConfig({ children, isLightMode }: ThemeConfigProps) {
  const themeOptions: Partial<MThemeOptions> = useMemo(() => {
    const options = {
      palette: palette[isLightMode ? 'light' : 'dark'],
      shadows: shadows[isLightMode ? 'light' : 'dark'],
      typography,
      shape: borderRadius,
      breakpoints: breakpointsX,
      components: componentsOverride({
        theme: {
          palette: palette[isLightMode ? 'light' : 'dark'],
          shadows: shadows[isLightMode ? 'light' : 'dark'],
          typography,
          shape: borderRadius,
        },
      }),
    };
    if (!isLightMode) options.palette.mode = 'dark';
    return options;
  }, [isLightMode]);

  const theme = useMemo(() => createMuiTheme(themeOptions), [themeOptions]);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

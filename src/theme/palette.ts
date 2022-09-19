import { alpha } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string): string {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export interface PaletteColorOptions {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

// Setup Colors
const PRIMARY = {
  lighter: '#C9ECFC',
  light: '#5FB4EF',
  main: '#0064CC',
  dark: '#003992',
  darker: '#001C61',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#f3f3f3',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#DDFBDC',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

export interface ColorOptions {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
  1100: string;
  1200: string;
  1300: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
}

const GREY: ColorOptions = {
  0: '#FFFFFF',
  100: '#F1F8FA',
  200: '#F4F6F8',
  300: '#CDDCE6',
  400: '#B1C1CE',
  500: '#8E9EAE',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  1000: '#BDC3C8',
  1100: '#EAEAEA',
  1200: '#DBDBDB',
  1300: '#121E28',
  500_8: alpha('#8E9EAE', 0.08),
  500_12: alpha('#8E9EAE', 0.12),
  500_16: alpha('#8E9EAE', 0.16),
  500_24: alpha('#8E9EAE', 0.24),
  500_32: alpha('#8E9EAE', 0.32),
  500_48: alpha('#8E9EAE', 0.48),
  500_56: alpha('#8E9EAE', 0.56),
  500_80: alpha('#8E9EAE', 0.8),
};

export interface PalleteGradientOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

const GRADIENTS: PalleteGradientOptions = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

interface PalleteTextOptions {
  primary: string;
  secondary: string;
  disabled: string;
}

interface PalleteBackgroundOptions {
  paper: string;
  default: string;
  neutral: string;
}

export interface PalleteActionOptions {
  active: string;
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
}

export interface PaletteOptions {
  mode: 'light' | 'dark';
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  info: PaletteColorOptions;
  success: PaletteColorOptions;
  warning: PaletteColorOptions;
  error: PaletteColorOptions;
  gradients: PalleteGradientOptions;
  text: PalleteTextOptions;
  background: PalleteBackgroundOptions;
  action: PalleteActionOptions;
  grey: ColorOptions | { [key: string]: string };
  divider: string;
}

export interface AdditionalPaletteOptions {
  getContrastText: (color: string) => string;
  common: {
    white: string;
  };
}

export interface PaletteOptionsIndexed {
  [key: string]: PaletteColorOptions & PalleteActionOptions;
}

export interface PalleteThemeOptions {
  light: PaletteOptions;
  dark: PaletteOptions;
}

const palette: PalleteThemeOptions = {
  // LIGHT
  light: {
    mode: 'light',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff',
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff',
    },
    info: {
      lighter: INFO.lighter,
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
      darker: INFO.darker,
      contrastText: '#fff',
    },
    success: {
      lighter: SUCCESS.lighter,
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
      darker: SUCCESS.darker,
      contrastText: GREY[800],
    },
    warning: {
      lighter: WARNING.lighter,
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
      darker: WARNING.darker,
      contrastText: GREY[800],
    },
    error: {
      lighter: ERROR.lighter,
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
      darker: ERROR.darker,
      contrastText: '#fff',
    },

    grey: GREY,
    gradients: GRADIENTS,

    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },

    divider: GREY[500_24],

    background: {
      paper: '#fff',
      default: '#fff',
      neutral: GREY[200],
    },

    action: {
      active: GREY[600],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  },

  // DARK
  dark: {
    mode: 'dark',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff',
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff',
    },
    info: {
      lighter: INFO.lighter,
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
      darker: INFO.darker,
      contrastText: '#fff',
    },
    success: {
      lighter: SUCCESS.lighter,
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
      darker: SUCCESS.darker,
      contrastText: GREY[800],
    },
    warning: {
      lighter: WARNING.lighter,
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
      darker: WARNING.darker,
      contrastText: GREY[800],
    },
    error: {
      lighter: ERROR.lighter,
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
      darker: ERROR.darker,
      contrastText: '#fff',
    },

    grey: GREY,
    gradients: GRADIENTS,

    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },

    divider: GREY[500_24],

    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16],
    },

    action: {
      active: GREY[500],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  },
};

export default palette;

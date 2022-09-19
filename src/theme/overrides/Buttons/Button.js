import { alpha } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

export default function Button({ theme }) {
  return {
    MuiButton: {
      variants: [
        // Contained Button
        {
          props: {
            variant: 'contained',
            color: 'inherit',
          },
          style: {
            boxShadow: 'none',
            color: theme.palette.grey[800],
            backgroundColor: theme.palette.grey[300],
            '&:hover': {
              backgroundColor: theme.palette.grey[400],
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
        },

        // Outlined Button
        {
          props: {
            color: 'inherit',
            variant: 'outlined',
          },
          style: {
            border: `1px solid ${theme.palette.grey[500_32]}`,
            '&:hover': { backgroundColor: theme.palette.grey[500_8] },
          },
        },

        // Text Button
        {
          props: { variant: 'text', color: 'inherit' },
          style: {
            '&:hover': {
              backgroundColor: theme.palette.grey[500_8],
            },
          },
        },

        // Size
        {
          props: { size: 'large' },
          style: { height: 48 },
        },
        {
          props: { size: 'medium' },
          style: { minWidth: 80 },
        },
      ],

      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
          border: `solid 1px ${alpha(theme.palette.primary.main, 0.48)}`,
        },
      },
    },
  };
}

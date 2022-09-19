// ----------------------------------------------------------------------

export default function ControlLabel({ theme }) {
  return {
    // FormControlLabel
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          '& .MuiCheckbox-root': {
            padding: 6,
            marginRight: 6,
          },
        },
      },
    },

    // FormHelperText
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 8,
        },
      },
    },

    // FormLabel
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled,
        },
      },
    },
  };
}

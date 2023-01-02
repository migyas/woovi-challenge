import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif",
    htmlFontSize: 10,

    h1: {
      fontSize: '2.4rem',
      fontWeight: 800,
      lineHeight: '33px',
    },
  },
  palette: {
    info: {
      main: '#E5E5E5',
    },
    success: {
      main: '#03D69D',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          color: '#E5E5E5',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: 0,
          textTransform: 'none',
          color: '#4D4D4D',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '0 0.95rem',
          height: '100%',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          '& img': {
            paddingTop: '2.9rem',
            paddingBottom: '2.5rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#133A6F',
          color: '#ffffff',
          fontSize: '1.8rem',
          fontWeight: 600,
          height: '3.9rem',
          padding: '0.438rem 1.25rem',
          lineHeight: '1.534rem',
          borderRadius: 8,
          textTransform: 'none',

          ':hover': {
            background: '#133A9F',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: 0,

          '&.Mui-selected': {
            background: '#F4FBF9',
            border: '2px solid #03D69D !important',

            ':hover': {
              background: '#d2f6ec',
              border: '2px solid #03D69D !important',
            },
          },

          ':hover': {
            background: '#F4FBF9',
            border: '1px solid #bdbdbd !important',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,

          '&.MuiCheckbox-root input': {
            zIndex: -1,
          },

          '&.MuiCheckbox-root svg': {
            width: '26px',
            height: '26px',
            marginTop: '5px',
          },
        },
      },
    },
  },
});

export default theme;

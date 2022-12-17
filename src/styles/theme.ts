import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
  palette: {
    success: {
      main: "#03D69D",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#133A6F",
          color: "#ffffff",
          fontSize: "1.125rem",
          fontWeight: 600,
          padding: "0.438rem 1.25rem",
          lineHeight: "1.534rem",
          borderRadius: 8,
          ":hover": {
            background: "#133A9F",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: 0,
          "&.Mui-selected": {
            background: "#E7FAF5",
            border: "2px solid #03D69D !important",

            ":hover": {
              background: "#d2f6ec",
            },
          },
          ":hover": {
            background: "#E7FAF5",
            border: "1px solid #bdbdbd !important",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          "&.MuiCheckbox-root input": {
            zIndex: -1,
          },
        },
      },
    },
  },
});

export default theme;

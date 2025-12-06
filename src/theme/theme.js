"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A93C55",
      light: "#D96C82",
    },
    secondary: {
      main: "#8C6F56",
    },
    background: {
      default: "#FFF8F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2A2A2A",
      secondary: "#5C5C5C",
    },
  },
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    h1: { fontFamily: `"Playfair Display", serif`, fontWeight: 700 },
    h2: { fontFamily: `"Playfair Display", serif`, fontWeight: 600 },
    h3: { fontFamily: `"Playfair Display", serif`, fontWeight: 500 },
    button: {
      borderRadius: "8px",
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 28px",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.03)" },
        },
      },
    },
  },
});

export default theme;

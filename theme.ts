"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D75337",
      dark: "#BD442B",
      light: "#EB6A4E",
    },
    secondary: {
      main: "#4A3456",
      dark: "#2D1F34",
      light: "#856D93",
    },
  },
  typography: {
    fontFamily: "var(--font-lexend-deca)",
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;

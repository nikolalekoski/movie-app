import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeContext from "./ThemeContext";
import type { ThemeMode } from "./ThemeContext";
interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === "dark"
          ? {
              background: {
                default: "#1c1c1e", // very dark gray (softer than #121212 or black)
                paper: "#2c2c2e",
              },
              text: {
                primary: "#e0e0e0",
                secondary: "#b0b0b0",
              },
              primary: {
                main: "#ff69b4", // 💖 HOT PINK for testing
              },
            }
          : {
              background: {
                default: "#f4f4f4",
                paper: "#ffffff",
              },
              primary: {
                main: "#1976d2",
              },
            }),
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

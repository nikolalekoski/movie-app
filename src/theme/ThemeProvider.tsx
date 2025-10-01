import { useState, useMemo, useEffect } from "react";
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

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", next);
      return next;
    });
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === "dark"
          ? {
              background: {
                default: "#1c1c1e",
                paper: "#2c2c2e",
              },
              text: {
                primary: "#e0e0e0",
                secondary: "#b0b0b0",
              },
              primary: {
                main: "#ff69b4",
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

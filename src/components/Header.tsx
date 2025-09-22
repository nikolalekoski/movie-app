import {
  Typography,
  AppBar,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PAGES_CONSTANT } from "../constants/common";
import { useContext } from "react";
import ThemeContext from "../theme/ThemeContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Header must be used within a ThemeProvider"); // zasto ako go izbrisam ova ne raboti?
  }

  const { mode, toggleTheme } = themeContext;

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        px: 2,
        bgcolor: "background.paper",
        color: "text.primary",
      }}
      position="sticky"
    >
      <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "left", p: 1 }}>
        Movie app
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Tooltip title="Change theme">
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Tooltip>

        {PAGES_CONSTANT.map((item, index) => (
          <Button
            key={index}
            color="inherit"
            component={Link}
            to={item.url}
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.09)",
              },
            }}
          >
            {item.pageTitle}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
}

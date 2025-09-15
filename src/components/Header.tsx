import { Typography, AppBar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { PAGES_CONSTANT } from "../constants/common";

export default function Header() {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        px: 2,
      }}
      position="static">
      <Typography variant="h2" sx={{ flexGrow: 1, textAlign: "left" }}>
        Movie app
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
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
              borderRadius: "20px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}>
            {item.pageTitle}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
}

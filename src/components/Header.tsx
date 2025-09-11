import { Typography, AppBar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        px: 2,
      }}
      position="static"
    >
      <Typography variant="h2" sx={{ flexGrow: 1, textAlign: "left" }}>
        Movie app
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/popular"
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          Popular
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/upcoming"
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          Upcoming
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/latest"
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          Latest
        </Button>
      </Box>
    </AppBar>
  );
}

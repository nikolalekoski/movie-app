import { Typography, AppBar } from "@mui/material";

export default function Header() {
  return (
    <AppBar sx={{ display: "flex" }}>
      <Typography variant="h2" sx={{ flexGrow: "1", textAlign: "center" }}>
        Movie app
      </Typography>
    </AppBar>
  );
}

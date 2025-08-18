import { Box, Typography } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
export default function Home() {
  return (
    <PageLayout title={"Home"}>
      <Box sx={{ background: "red" }}>
        <Typography>Test</Typography>
      </Box>
    </PageLayout>
  );
}

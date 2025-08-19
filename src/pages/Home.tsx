import { Box, Typography } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import movies from "../db/moveis.json";
import MovieCard from "../components/MovieCard";
export default function Home() {
  return (
    <PageLayout title={"Home"}>
      <Box sx={{ background: "lightblue" }}>
        <Typography variant="h6">Welcome!</Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            //justifyContent: "center",
            gap: 1,
            padding: 2,
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
}

import { Box, Typography } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import movies from "../db/moveis.json";
import MovieCard from "../components/MovieCard";
export default function Home() {
  return (
    <PageLayout title={"Home"}>
      <Box sx={{ background: "lightblue" }}>
        <Typography>Welcome!</Typography>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </PageLayout>
  );
}

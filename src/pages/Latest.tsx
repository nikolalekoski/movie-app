import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getLatestMovie } from "../store/features/movie-slice";
import { Box, Typography, CircularProgress, Grid, Button } from "@mui/material";
import MovieCard from "../components/MovieCard";

export default function Latest() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.movie);
  const movies = data.data.results || [];

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    dispatch(getLatestMovie());
  }, [dispatch]);

  const favoriteIds: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const filteredMovies = showFavoritesOnly
    ? movies.filter((movie) => favoriteIds.includes(movie.id))
    : movies;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Latest Movies
      </Typography>

      <Button
        variant={showFavoritesOnly ? "contained" : "outlined"}
        onClick={() => setShowFavoritesOnly((prev) => !prev)}
        sx={{ mb: 2 }}
      >
        {showFavoritesOnly ? "Show All Movies" : "Favorites"}
      </Button>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {filteredMovies.map((movie) => (
            <Grid key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

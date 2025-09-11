import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { EmovieSearchParam } from "../types/movie";
import { filterMovies } from "../helpers/helper";
import { Colors } from "../shared/colors";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getPopularMovies } from "../store/features/movie-slice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.movie);
  const movies = data.data.results || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchParam, setSearchParam] = useState<EmovieSearchParam>(
    EmovieSearchParam.TITLE
  );
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const favoriteIds: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const rawFilteredMovies = filterMovies(movies, searchTerm, searchParam);
  const filteredMovies = showFavoritesOnly
    ? rawFilteredMovies.filter((movie) => favoriteIds.includes(movie.id))
    : rawFilteredMovies;

  return (
    <PageLayout
      title="Home"
      headerRight={
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchParam={searchParam}
          onSearchParamChange={setSearchParam}
        />
      }
    >
      <Box sx={{ backgroundColor: Colors.primary.white, padding: 2 }}>
        <Typography variant="h6">Welcome!</Typography>

        <Button
          variant={showFavoritesOnly ? "contained" : "outlined"}
          onClick={() => setShowFavoritesOnly((prev) => !prev)}
          sx={{ mt: 2, mb: 2 }}
        >
          {showFavoritesOnly ? "Show All Movies" : "Favorites"}
        </Button>

        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {filteredMovies.map((movie) => (
              <Grid key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </PageLayout>
  );
}

import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { PageLayout } from "../components/Layout/PageLayout";
import SearchBar from "../components/SearchBar";
import { useAppSelector, useAppDispatch } from "../store/store";
import { getPopularMovies } from "../store/features/movie-slice";
import type { IMovie } from "../types/movie";

export default function Favorites() {
  const dispatch = useAppDispatch();

  const {
    data: {
      data: { results: movies },
    },
    loading,
  } = useAppSelector((state) => state.movie);

  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    const favoriteIds: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const filtered = movies.filter((movie) => favoriteIds.includes(movie.id));
    setFavoriteMovies(filtered);
  }, [movies]);

  if (loading) {
    return (
      <PageLayout title="Favorites">
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Box>
      </PageLayout>
    );
  }

  if (favoriteMovies.length === 0) {
    return (
      <PageLayout title="Favorites">
        <Typography variant="h6" sx={{ mt: 5, textAlign: "center" }}>
          No favorite movies found.
        </Typography>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Favorites"
      searchBarComponent={
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      }
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: 3,
        }}
      >
        {favoriteMovies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((movie) => (
            <Box
              key={movie.id}
              sx={{
                flex: "0 1 calc(33.333% - 24px)",
                boxSizing: "border-box",
                display: "flex",
              }}
            >
              <MovieCard movie={movie} />
            </Box>
          ))}
      </Box>
    </PageLayout>
  );
}

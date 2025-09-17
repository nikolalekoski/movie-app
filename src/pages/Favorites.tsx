import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { PageLayout } from "../components/Layout/PageLayout";
import type { IMovie } from "../types/movie";
import SearchBar from "../components/SearchBar";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export default function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      setLoading(true);
      const favoriteIds: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      try {
        const movies = await Promise.all(
          favoriteIds.map(async (id) => {
            const res = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
            if (!res.ok) throw new Error("Failed to fetch movie");
            return res.json() as Promise<IMovie>;
          })
        );
        setFavoriteMovies(movies);
      } catch (error) {
        console.error("Error fetching favorite movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteMovies();
  }, []);

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
          No favorite movies added yet.
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

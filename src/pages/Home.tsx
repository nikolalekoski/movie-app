import { Box, Typography } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import movies from "../db/movies.json";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { EmovieSearchParam } from "../types/movie.ts";
import { filterMovies } from "../helpers/helper.ts";
import { Colors } from "../shared/colors.ts";
import { Grid, Button } from "@mui/material";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchParam, setSearchParam] = useState<EmovieSearchParam>(
    EmovieSearchParam.TITLE
  );
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const rawFilteredMovies = filterMovies(movies, searchTerm, searchParam);
  const favoriteIds: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const filteredMovies = showFavoritesOnly
    ? rawFilteredMovies.filter((movie) => favoriteIds.includes(movie.id))
    : rawFilteredMovies;

  return (
    <PageLayout
      title={"Home"}
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

        <Grid container spacing={3}>
          {filteredMovies.map((movie) => (
            <Grid key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
}

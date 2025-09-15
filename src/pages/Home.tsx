import { Box, CircularProgress } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { filterMovies } from "../helpers/helper";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getPopularMovies } from "../store/features/movie-slice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data: movies, loading } = useAppSelector((state) => state.movie);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const rawFilteredMovies = filterMovies(movies?.data?.results, searchTerm);
  const filteredMovies = rawFilteredMovies;

  return (
    <PageLayout title="Home" searchBarComponent={<SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />}>
      <Box>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}>
            {filteredMovies.map((movie) => (
              <Box
                key={movie.id}
                sx={{
                  flex: "1 1 calc(33.333% - 16px)",
                  minWidth: "250px",
                  gap: 2,
                }}>
                <MovieCard movie={movie} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </PageLayout>
  );
}

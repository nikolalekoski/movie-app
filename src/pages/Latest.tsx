import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getLatestMovie } from "../store/features/movie-slice";
import { Box, CircularProgress } from "@mui/material";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { filterMovies } from "../helpers/helper";
import { PageLayout } from "../components/Layout/PageLayout";

export default function Latest() {
  const dispatch = useAppDispatch();
  const {
    data: {
      data: { results: movies },
    },
    loading,
  } = useAppSelector((state) => state.movie);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getLatestMovie());
  }, [dispatch]);

  const filteredMovies = filterMovies(movies, searchTerm);

  return (
    <PageLayout
      title="Latest"
      searchBarComponent={
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      }
    >
      <Box>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: 3,
            }}
          >
            {filteredMovies.map((movie) => (
              <Box
                key={movie.id}
                sx={{
                  flex: "0 1 calc(33.333% - 24px)",
                  boxSizing: "border-box",
                  display: "flex",
                }}
              >
                <MovieCard movie={movie} showFavorite={false} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </PageLayout>
  );
}

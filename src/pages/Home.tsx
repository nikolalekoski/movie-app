import { Box, Typography } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import movies from "../db/moveis.json";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { EmovieSearchParam } from "../types/movie.ts";
import { filterMovies } from "../helpers/helper.ts";
import { Colors } from "../shared/colors.ts";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchParam, setSearchParam] = useState<EmovieSearchParam>(EmovieSearchParam.TITLE);
  const filteredMovies = filterMovies(movies, searchTerm, searchParam);

  return (
    <PageLayout title={"Home"} headerRight={<SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} searchParam={searchParam} onSearchParamChange={setSearchParam} />}>
      <Box sx={{ backgroundColor: Colors.primaryWhite, padding: 2 }}>
        <Typography variant="h6">Welcome!</Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginTop: 2,
          }}>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
}

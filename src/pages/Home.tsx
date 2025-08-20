import { Box, Typography } from "@mui/material";
import { PageLayout } from "../components/Layout/PageLayout";
import movies from "../db/moveis.json";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { filterMovies } from "../helpers/Helper.ts";
export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  poster: string;
  description: string;
}

export enum EmovieSearchParam {
  TITLE = "title",
  DESCRIPTION = "description",
  GENRE = "genre",
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchParam, setSearchParam] = useState<EmovieSearchParam>(
    EmovieSearchParam.TITLE
  );
  const filteredMovies = filterMovies(movies, searchTerm, searchParam);

  /*const filteredMovies = movies.filter((movie: Movie) => {
    const valueToSearch = movie[searchParam as keyof Movie];
    if (typeof valueToSearch !== "string") return false;
    return valueToSearch.toLowerCase().includes(searchTerm.toLowerCase());
  });*/

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
      <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: 2 }}>
        <Typography variant="h6">Welcome!</Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginTop: 2,
          }}
        >
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
}

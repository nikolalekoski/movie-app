import { EmovieSearchParam } from "../pages/Home.tsx";
import type { Movie } from "../pages/Home.tsx";

export function filterMovies(
  movies: Movie[],
  searchTerm: string,
  searchParam: EmovieSearchParam
): Movie[] {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return movies.filter((movie) => {
    const valueToSearch = movie[searchParam as keyof Movie];
    if (typeof valueToSearch !== "string") return false;
    return valueToSearch.toLowerCase().includes(lowerSearchTerm);
  });
}

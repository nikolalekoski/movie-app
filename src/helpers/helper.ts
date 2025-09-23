import type { IMovie } from "../types/movie";

export function filterMovies(movies: IMovie[], searchTerm: string): IMovie[] {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return movies.filter((movie) => Object.values(movie).some((value) => typeof value === "string" && value.toLowerCase().includes(lowerSearchTerm)));
}

import type { EmovieSearchParam, IMovie } from "../types/movie";

export function filterMovies(movies: IMovie[], searchTerm: string, searchParam: EmovieSearchParam): IMovie[] {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return movies.filter((movie) => {
    const valueToSearch = movie[searchParam as keyof IMovie];
    if (typeof valueToSearch !== "string") return false;
    return valueToSearch.toLowerCase().includes(lowerSearchTerm);
  });
}

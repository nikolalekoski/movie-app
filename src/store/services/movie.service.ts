const { VITE_API_KEY } = import.meta.env;

export const getPopularMovies = async () =>
  await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}`
  );

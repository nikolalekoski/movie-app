const { VITE_API_KEY } = import.meta.env;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/popular?api_key=${VITE_API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return await response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${BASE_URL}/upcoming?api_key=${VITE_API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }
  return await response.json();
};

export const getLatestMovie = async () => {
  const response = await fetch(`${BASE_URL}/latest?api_key=${VITE_API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movie");
  }
  return await response.json();
};

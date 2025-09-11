import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IMovieState } from "../../types/movie";
const { VITE_API_KEY } = import.meta.env;

const initialState: IMovieState = {
  data: {
    data: {
      results: [],
    },
    page: 1,
    total_pages: 0,
    total_results: 0,
  },
  loading: false,
};

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);
export const getUpcomingMovies = createAsyncThunk(
  "movie/getUpcomingMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);

export const getLatestMovie = createAsyncThunk(
  "movie/getLatestMovie",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=${VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPopularMovies.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("Full API response:", action.payload); // Log full response
          state.loading = false;
          state.data = {
            data: { results: action.payload.results },
            page: action.payload.page,
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
          };
        }
      )
      .addCase(getPopularMovies.rejected, (state) => {
        state.loading = false;
      })
      // Upcoming
      .addCase(getUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          data: { results: action.payload.results },
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        };
      })
      .addCase(getUpcomingMovies.rejected, (state) => {
        state.loading = false;
      })

      // Latest
      .addCase(getLatestMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLatestMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          data: { results: [action.payload] }, // 👈 wrap the single movie in an array
          page: 1,
          total_pages: 1,
          total_results: 1,
        };
      })
      .addCase(getLatestMovie.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;

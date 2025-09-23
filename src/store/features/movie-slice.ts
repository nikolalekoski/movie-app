import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IMovieState } from "../../types/movie";
import {
  getPopularMovies as fetchPopularMovies,
  getUpcomingMovies as fetchUpcomingMovies,
  getLatestMovie as fetchLatestMovie,
} from "../services/movie.service";

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
  async () => await fetchPopularMovies()
);

export const getUpcomingMovies = createAsyncThunk(
  "movie/getUpcomingMovies",
  async () => await fetchUpcomingMovies()
);

export const getLatestMovie = createAsyncThunk(
  "movie/getLatestMovie",
  async () => await fetchLatestMovie()
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
      .addCase(getPopularMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = {
          data: { results: payload.results },
          page: payload.page,
          total_pages: payload.total_pages,
          total_results: payload.total_results,
        };
      })
      .addCase(getPopularMovies.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = {
          data: { results: payload.results },
          page: payload.page,
          total_pages: payload.total_pages,
          total_results: payload.total_results,
        };
      })
      .addCase(getUpcomingMovies.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getLatestMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLatestMovie.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = {
          data: { results: [payload] },
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

import type { IPaginatedResponse } from "./common";

export enum EmovieSearchParam {
  TITLE = "title",
  DESCRIPTION = "description",
  GENRE = "genre",
}

export interface IMovieState {
  data: IPaginatedResponse<IMoviesData>;
  loading: boolean;
}

export interface IMoviesData {
  results: IMovie[];
}
export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: IGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export enum EmovieSearchParam {
  TITLE = "title",
  DESCRIPTION = "description",
  GENRE = "genre",
}

export interface IMovie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  poster: string;
  description: string;
}

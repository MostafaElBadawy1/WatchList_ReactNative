import type { MoviesResponse } from "src/features/movies/types/movie";
import { apiGet } from "src/shared/api/client";

export const getPopularMovies = (page: number) =>
  apiGet<MoviesResponse>(`/movie/popular?language=en-US&page=${page}`);

export const getMovieDetails = (id: number) =>
  apiGet(`/movie/${id}?language=en-US`);

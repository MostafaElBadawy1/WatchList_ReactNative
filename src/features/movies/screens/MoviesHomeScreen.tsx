import { NativeStackScreenProps } from "@react-navigation/native-stack";

import MoviesGrid from "src/features/movies/components/MoviesGrid";
import MoviesSkeletonGrid from "src/features/movies/components/MoviesSkeletonGrid";
import { useMovies } from "src/features/movies/hooks/useMovies";
import type { MoviesStackParamList } from "src/navigation/types";

type Props = NativeStackScreenProps<MoviesStackParamList, "MoviesHome">;

export default function MoviesHomeScreen({ navigation }: Props) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovies();

  if (isLoading) {
    return <MoviesSkeletonGrid />;
  }

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <MoviesGrid
      movies={movies}
      onMoviePress={(movieId) =>
        navigation.navigate("MovieDetails", { movieId })
      }
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      isFetchingMore={isFetchingNextPage}
    />
  );
}

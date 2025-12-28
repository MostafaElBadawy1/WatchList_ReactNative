import { FlatList, useWindowDimensions } from "react-native";
import type { Movie } from "../types/movie";
import MovieItem from "./MovieItem";
import { useFavorites } from "src/features/movies/hooks/useFavorites";

const GAP = 12;

type Props = {
  movies: Movie[];
  onMoviePress: (movieId: number) => void;
  onEndReached?: () => void;
  isFetchingMore?: boolean;
};

export default function MoviesGrid({
  movies,
  onMoviePress,
  onEndReached,
  isFetchingMore = false,
}: Props) {
  const { width } = useWindowDimensions();
  const { isFavorite, toggleFavorite } = useFavorites();

  const itemWidth = (width - GAP * 3) / 2;

  return (
    <FlatList
      data={movies}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{ gap: GAP, paddingHorizontal: GAP }}
      contentContainerStyle={{ paddingTop: GAP }}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <MovieItem
          movie={item}
          width={itemWidth}
          isFavorite={isFavorite(item.id)}
          onToggleFavorite={() => toggleFavorite(item)}
          onPress={() => onMoviePress(item.id)}
        />
      )}
    />
  );
}

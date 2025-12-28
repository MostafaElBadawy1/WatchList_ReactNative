export type MoviesStackParamList = {
  MoviesHome: undefined;
  MovieDetails: {
    movieId: number;
  };
};

export type SettingsStackParamList = {
  Settings: undefined;
};

export type FavoriteStackParamList = {
  favorite: undefined;
   MovieDetails: {
    movieId: number;
  };
};

export type RootTabParamList = {
  MoviesTab: undefined;
  FavoritesTab: undefined;
  SettingsTab: undefined;
};

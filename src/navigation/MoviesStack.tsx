import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesHomeScreen from "src/features/movies/screens/MoviesHomeScreen";
import MovieDetailsScreen from "src/features/movies/screens/MovieDetailsScreen";
import { MoviesStackParamList } from "src/navigation/types";

const Stack = createNativeStackNavigator<MoviesStackParamList>();


export default function MoviesStack() {
  return (
    <Stack.Navigator id="MoviesStack">
      <Stack.Screen
        name="MoviesHome"
        component={MoviesHomeScreen}
        options={{ title: "Movies" }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
}
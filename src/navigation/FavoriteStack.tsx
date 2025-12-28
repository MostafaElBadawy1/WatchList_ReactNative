import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "src/features/favorites/screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator id="FavoritesStack">
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}

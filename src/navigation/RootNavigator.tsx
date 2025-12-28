import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "src/navigation/TabNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

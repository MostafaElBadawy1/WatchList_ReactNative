import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { SettingsStackParamList } from "src/navigation/types";
import SettingsScreen from "src/features/settings/screens/SettingsScreen";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStack() {
  return (
    <Stack.Navigator id="SettingsStack">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
}

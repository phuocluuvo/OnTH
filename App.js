import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemProvider from "./Provider";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}

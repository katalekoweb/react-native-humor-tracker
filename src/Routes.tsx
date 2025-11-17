import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} /> 
        <Stack.Screen name="setUserName" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

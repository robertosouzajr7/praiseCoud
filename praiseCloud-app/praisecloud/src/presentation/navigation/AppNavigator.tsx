import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScrenn from "../screens/LoginScreen";
import CadastroScrenn from "../screens/signUpScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScrenn} />
      <Stack.Screen name="Signup" component={CadastroScrenn} />
    </Stack.Navigator>
  );
}

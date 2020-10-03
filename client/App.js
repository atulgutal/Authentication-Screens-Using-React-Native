import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import HomeScreen from "./src/screens/HomeScreen";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="login">
        <RootStack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{ title: "" }}
        />
        <RootStack.Screen
          name="registrationScreen"
          component={RegistrationScreen}
          options={{ title: "" }}
        />
        <RootStack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{ title: "" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

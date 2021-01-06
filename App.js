import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/components/LoginPage";
import RegisterPage from "./src/components/RegisterPage";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/components/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator>
        <AppStackNavigator.Screen
          name="Login"
          component={LoginPage}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <AppStackNavigator.Screen
          name="Home"
          component={HomePage}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Login";

  switch (routeName) {
    case "Feed":
      return "Feed";
    case "Settings":
      return "Settings";
  }
}
const AppStackNavigator = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

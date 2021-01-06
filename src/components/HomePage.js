import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "./SettingsPage";
import FeedPage from "./FeedPage";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export default class HomePage extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Feed") {
              iconName = "person-outline";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Feed" component={FeedPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    );
  }
}

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "stretch",
  },
  text: {
    textAlign: "center",
    color: "#ecf0f1",
    fontSize: 20,
  },
  buttoncontainer: {
    height: 50,
    borderRadius: 50,
    backgroundColor: "#1abc9c",
    paddingVertical: 10,
    justifyContent: "center",
  },
});

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterPage from "../components/RegisterPage";
import HomePage from "../components/HomePage";
import { NavigationContainer } from "@react-navigation/native";

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textfields}>
          <TextInput
            style={styles.input}
            placeholder="username"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            returnKeyType="go"
            secureTextEntry
            ref={(input) => (this.passwordInput = input)}
          />
          <TouchableOpacity style={styles.buttoncontainer}>
            <Text
              style={styles.buttontext}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    alignItems: "stretch",
  },
  input: {
    paddingLeft: 20,
    borderRadius: 50,
    height: 50,
    fontSize: 25,
    backgroundColor: "white",
    borderColor: "#1abc9c",
    margin: 10,
  },
  buttoncontainer: {
    height: 50,
    borderRadius: 50,
    backgroundColor: "#1abc9c",
    paddingVertical: 10,
    justifyContent: "center",
  },
  buttontext: {
    textAlign: "center",
    color: "#ecf0f1",
    fontSize: 20,
  },
});

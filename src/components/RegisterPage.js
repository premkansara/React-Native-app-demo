import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/native";

export default class RegisterPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerform}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            returnKeyType="go"
            secureTextEntry
            ref={(input) => (this.passwordInput = input)}
          />
          <TouchableOpacity style={styles.buttoncontainer}>
            <Text
              style={styles.buttontext}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "yellow",
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

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class FeedPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Access your Feed Here! </Text>
      </View>
    );
  }
}

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

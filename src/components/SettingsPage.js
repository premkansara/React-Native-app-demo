import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "User Settings",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Notification Settings",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Log Out",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "tomato",
    padding: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
  },
});

export default App;

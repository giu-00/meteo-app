import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../components/molecules/HeaderText";
import AddCity from "../components/molecules/AddCity";
import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <HeaderText />
      <AddCity />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
});

export default HomeScreen;

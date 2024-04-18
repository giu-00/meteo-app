import React from "react";
import { View, StyleSheet } from "react-native";

import PlusButton from "../atoms/PlusButton";
import TextAddCity from "../atoms/TextAddCity";

const AddCity = (props) => {
  return (
    <View style={styles.addCity}>
      <PlusButton />
      <TextAddCity />
    </View>
  );
};

const styles = StyleSheet.create({
  addCity: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
});

export default AddCity;

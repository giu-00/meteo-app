import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const TextAddCity = (props) => {
  return <Text style={styles.addCityText}>Aggiungi città</Text>;
};

const styles = StyleSheet.create({
  addCityText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default TextAddCity;

import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

const PlusButton = (props) => {
  return (
    <TouchableOpacity style={styles.plusButton}>
      <Text style={styles.plusButtonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    width: 25,
    height: 25,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 7,
    marginRight: 15,
  },
  plusButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary,
  },
});

export default PlusButton;

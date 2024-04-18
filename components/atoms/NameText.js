import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const NameText = (props) => {
  return <Text style={styles.titleText}>Mario</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: Colors.primary,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: "600",
  },
});

export default NameText;

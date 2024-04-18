import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const TitleText = (props) => {
  return <Text style={styles.titleText}>Good Morning!</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: Colors.primary,
    textAlign: "center",
    paddingTop: 80,
    fontWeight: "600",
  },
});

export default TitleText;

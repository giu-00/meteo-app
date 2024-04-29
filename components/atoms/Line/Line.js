import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LineStyle from "./Line.style";

const Line = (props) => {
  return (
    <View>
      <LinearGradient
        style={LineStyle.container}
        colors={["white", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </View>
  );
};

export default Line;

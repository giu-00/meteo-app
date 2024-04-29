import React from "react";
import { View } from "react-native";
import DegreeDotStyle from "./DegreeDot.style";

const DegreeDot = (props) => {
  return (
    <View>
      <View style={[DegreeDotStyle.dot, props.style]} />
    </View>
  );
};

export default DegreeDot;

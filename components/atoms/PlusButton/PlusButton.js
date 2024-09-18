import React from "react";
import { Text, View } from "react-native";

import PlusButtonStyle from "./PlusButton.style";

const PlusButton = (props) => {
  return (
    <View style={[PlusButtonStyle.plusButton, props.style]}>
      <Text style={[PlusButtonStyle.plusButtonText, props.style]}>+</Text>
    </View>
  );
};

export default PlusButton;

import React from "react";
import { Text, TouchableOpacity } from "react-native";

import PlusButtonStyle from "./PlusButton.style";

const PlusButton = (props) => {
  return (
    <TouchableOpacity style={[PlusButtonStyle.plusButton, props.style]}>
      <Text style={[PlusButtonStyle.plusButtonText, props.style]}>+</Text>
    </TouchableOpacity>
  );
};

export default PlusButton;

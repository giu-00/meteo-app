import React from "react";
import { Text, TouchableOpacity } from "react-native";

import PlusButtonStyle from "./PlusButton.style";

const PlusButton = (props) => {
  return (
    <TouchableOpacity style={PlusButtonStyle.plusButton}>
      <Text style={PlusButtonStyle.plusButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export default PlusButton;

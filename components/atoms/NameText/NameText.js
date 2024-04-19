import React from "react";
import { Text } from "react-native";

import NameTextStyle from "./NameText.style";

const NameText = (props) => {
  return <Text style={NameTextStyle.nameText}>{props.name}</Text>;
};

export default NameText;

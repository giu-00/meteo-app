import React from "react";
import { Text } from "react-native";

import CityTextStyle from "./CityText.style";

const CityText = (props) => {
  return <Text style={[CityTextStyle.text, props.style]}>{props.city}</Text>;
};

export default CityText;

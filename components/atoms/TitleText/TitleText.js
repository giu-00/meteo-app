import React from "react";
import { Text } from "react-native";

import TitleTextStyle from "./TitleText.style";

const TitleText = (props) => {
  return <Text style={TitleTextStyle.titleText}>{props.titleText}</Text>;
};
export default TitleText;

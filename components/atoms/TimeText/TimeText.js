import React from "react";
import { Text } from "react-native";

import TimeTextStyle from "./TimeText.style";

const TimeText = (props) => {
  return <Text style={TimeTextStyle.text}>{props.time}</Text>;
};

export default TimeText;

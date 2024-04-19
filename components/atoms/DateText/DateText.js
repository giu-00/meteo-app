import React from "react";
import { Text, View } from "react-native";

import DateTextStyle from "./DateText.style";

const DateText = (props) => {
  return (
    <View style={DateTextStyle.container}>
      <Text style={DateTextStyle.text}>{props.day}</Text>
      <Text style={DateTextStyle.text}>{props.month}</Text>
    </View>
  );
};

export default DateText;

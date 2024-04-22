import React from "react";
import { Text, View } from "react-native";

import DateTextStyle from "./DateText.style";

const DateText = (props) => {
  return (
    <View style={[DateTextStyle.container, props.style]}>
      <Text style={[DateTextStyle.text, props.style]}>{props.day} </Text>
      <Text style={[DateTextStyle.text, props.style]}>{props.month}</Text>
    </View>
  );
};

export default DateText;

import React from "react";
import { Text } from "react-native";

import DegreeTextStyle from "./DegreeText.style";

const DegreeText = (props) => {
  return <Text style={DegreeTextStyle.text}>{props.degree}</Text>;
};

export default DegreeText;

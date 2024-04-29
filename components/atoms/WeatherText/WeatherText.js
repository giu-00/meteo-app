import React from "react";
import { Text } from "react-native";
import WeatherTextStyle from "./WeatherText.style";

const WeatherText = (props) => {
  return <Text style={WeatherTextStyle.weather}>{props.weather}</Text>;
};

export default WeatherText;

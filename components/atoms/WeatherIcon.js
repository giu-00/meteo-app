import React from "react";
import { Image, View } from "react-native";

const WeatherIcon = (props) => {
  return (
    <View style={props.style}>
      <Image source={{ uri: props.image }} width={80} height={80} />
    </View>
  );
};

export default WeatherIcon;

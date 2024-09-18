import React from "react";
import { View } from "react-native";
import DateText from "../../atoms/DateText/DateText";
import DegreeText from "../../atoms/DegreeText/DegreeText";
import ShortWeatherCardStyle from "./ShortWeatherCard.style";
import WeatherIcon from "../../atoms/WeatherIcon";

const ShortWeatherCard = (props) => {
  return (
    <View style={[ShortWeatherCardStyle.container, props.style]}>
      <View style={[ShortWeatherCardStyle.card, props.style]}>
        <DateText day={props.day} />
        <DegreeText degree={props.degree} />
        <WeatherIcon image={props.image} />
      </View>
    </View>
  );
};

export default ShortWeatherCard;

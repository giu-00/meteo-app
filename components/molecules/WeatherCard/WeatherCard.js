import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CityText from "../../atoms/CityText/CityText";
import DateText from "../../atoms/DateText/DateText";
import TimeText from "../../atoms/TimeText/TimeText";
import DegreeText from "../../atoms/DegreeText/DegreeText";
import WeatherCardStyle from "./WeatherCard.style";

const WeatherCard = (props) => {
  return (
    <View style={WeatherCardStyle.container}>
      <LinearGradient
        colors={props.colors || ["#132462", "#355492", "#5986c4"]} //["#132462", "#355492", "#5986c4"]
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={WeatherCardStyle.card}
      >
        <View>
          <CityText city={props.city} />
          <DateText day={props.day} month={props.month} />
          <TimeText time={props.time} />
        </View>
        <View style={WeatherCardStyle.degree}>
          <DegreeText degree={props.degree} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default WeatherCard;

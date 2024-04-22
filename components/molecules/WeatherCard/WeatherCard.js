import React from "react";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CityText from "../../atoms/CityText/CityText";
import DateText from "../../atoms/DateText/DateText";
import TimeText from "../../atoms/TimeText/TimeText";
import DegreeText from "../../atoms/DegreeText/DegreeText";
import WeatherCardStyle from "./WeatherCard.style";

const WeatherCard = (props) => {
  return (
    <View style={[WeatherCardStyle.container, props.style]}>
      <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
        <LinearGradient
          colors={props.colors || ["#82a7eb", "#82a7eb"]} //["#132462", "#355492", "#5986c4"]
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={WeatherCardStyle.card}
        >
          <View>
            <CityText city={props.city} />
            <DateText day={props.day} month={props.month} />
            <TimeText time={props.time} />
          </View>
          <View style={[WeatherCardStyle.degree, props.style]}>
            <DegreeText degree={props.degree} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherCard;

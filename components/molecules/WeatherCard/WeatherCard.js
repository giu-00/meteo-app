import React from "react";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CityText from "../../atoms/CityText/CityText";
import DateText from "../../atoms/DateText/DateText";
import TimeText from "../../atoms/TimeText/TimeText";
import DegreeText from "../../atoms/DegreeText/DegreeText";
import WeatherCardStyle from "./WeatherCard.style";
import WeatherIcon from "../../atoms/WeatherIcon";

const WeatherCard = (props) => {
  return (
    <View style={[WeatherCardStyle.container, props.style]}>
      <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
        <LinearGradient
          colors={props?.colors || ["#82a7eb", "#82a7eb"]} //["#132462", "#355492", "#5986c4"]
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={WeatherCardStyle.card}
        >
          <View style={WeatherCardStyle.alignment}>
            <View style={{ maxWidth: 100 }} numberOfLines={1}>
              <View>
                <CityText city={props.city} style={WeatherCardStyle.text} />
              </View>
              <View>
                <DateText day={props.day} month={props.month} />
                <TimeText time={props.time} />
              </View>
            </View>

            <WeatherIcon image={props.image} style={WeatherCardStyle.icon} />

            <View style={[WeatherCardStyle.degree, props.style]}>
              <DegreeText degree={props.degree} />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherCard;

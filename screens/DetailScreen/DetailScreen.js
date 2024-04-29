import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

import HeaderInfo from "../../components/molecules/HeaderInfo/HeaderInfo";
import DegreeText from "../../components/atoms/DegreeText/DegreeText";
import ScrollableCard from "../../components/organism/ScrollableCard/ScrollableCard";
import DetailScreenStyle from "./DetailScreen.style";
import WeatherConditions from "../../constants/WeatherConditions";
import ForecastLine from "../../components/molecules/ForecastLine/ForecastLine";

const DetailScreen = (props) => {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentNumberDay, setCurrentNumberDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const { city } = props.route.params;

  useEffect(() => {
    setCurrentDayOfWeek(moment().format("dddd") + " ");
    setCurrentNumberDay(moment().format("D") + ",");
    setCurrentMonth(moment().format("MMMM"));
    //setCurrentTime(moment().format("LT"));
  }, []);
  return (
    <View style={DetailScreenStyle.container}>
      <LinearGradient
        colors={
          WeatherConditions[city.weather[0].main]?.color || [
            "#5f7be2",
            "#80aded",
          ]
        }
        style={DetailScreenStyle.container}
      >
        <HeaderInfo
          style={DetailScreenStyle.header}
          city={city.name}
          day={[currentDayOfWeek, currentNumberDay]}
          month={currentMonth}
          weather={WeatherConditions[city.weather[0].main].title}
        />

        <View style={DetailScreenStyle.containerDegree}>
          <DegreeText
            style={DetailScreenStyle.degree}
            degree={Math.floor(city.main.temp) + "°"}
          />
        </View>
        <ForecastLine />
        <ScrollableCard />
      </LinearGradient>
    </View>
  );
};

export default DetailScreen;

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HeaderInfo from "../../components/molecules/HeaderInfo/HeaderInfo";
import DegreeText from "../../components/atoms/DegreeText/DegreeText";
import ScrollableCard from "../../components/organism/ScrollableCard/ScrollableCard";
import DetailScreenStyle from "./DetailScreen.style";

const DetailScreen = (props) => {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentNumberDay, setCurrentNumberDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "january",
      "february",
      "march",
      "april",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    let date = new Date();

    setCurrentDayOfWeek(daysOfWeek[date.getDay()] + " ");
    setCurrentNumberDay(date.getDate() + ",");
    setCurrentMonth(months[date.getMonth()]);
  }, []);

  return (
    <View style={DetailScreenStyle.container}>
      <LinearGradient
        colors={props.colors || ["#5f7be2", "#80aded"]}
        style={DetailScreenStyle.container}
      >
        <HeaderInfo
          style={DetailScreenStyle.header}
          city="Turin"
          day={[currentDayOfWeek, currentNumberDay]}
          month={currentMonth}
          weather="Sunny"
        />
        <View style={DetailScreenStyle.containerDegree}>
          <DegreeText style={DetailScreenStyle.degree} degree="22°" />
        </View>
        <ScrollableCard />
      </LinearGradient>
    </View>
  );
};

export default DetailScreen;

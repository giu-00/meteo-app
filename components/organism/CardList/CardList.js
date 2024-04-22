import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import WeatherCard from "../../molecules/WeatherCard/WeatherCard";
import CardListStyle from "./CardList.style";

const CardList = (props) => {
  const navigation = useNavigation();

  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentNumberDay, setCurrentNumberDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentTime, setCurrentTime] = useState("");

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
    let hours = new Date().getHours();
    let min = new Date().getMinutes();

    setCurrentDayOfWeek(daysOfWeek[date.getDay()] + " ");
    setCurrentNumberDay(date.getDate() + ",");
    setCurrentMonth(months[date.getMonth()]);
    setCurrentTime(hours + ":" + min);
  }, []);

  return (
    <View style={CardListStyle.list}>
      <WeatherCard
        city="London"
        day={[currentDayOfWeek, currentNumberDay]}
        month={currentMonth}
        time={currentTime}
        degree="18°"
        colors={["#132462", "#355492", "#5986c4"]}
        onPress={() => {}}
      />
      <WeatherCard
        city="Turin"
        day={[currentDayOfWeek, currentNumberDay]}
        month={currentMonth}
        time={currentTime}
        degree="22°"
        colors={["#5f7be2", "#80aded"]}
        onPress={() => navigation.navigate("DetailScreen")}
      />
      <WeatherCard
        city="Rome"
        day={[currentDayOfWeek, currentNumberDay]}
        month={currentMonth}
        time={currentTime}
        degree="20°"
        colors={["#52586d", "#929eac"]}
        onPress={() => {}}
      />
    </View>
  );
};

export default CardList;

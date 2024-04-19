import React from "react";
import { View } from "react-native";

import WeatherCard from "../../molecules/WeatherCard/WeatherCard";
import CardListStyle from "./CardList.style";

const CardList = (props) => {
  return (
    <View style={CardListStyle.list}>
      <WeatherCard
        city="London"
        day="Friday 18,"
        month="september"
        time="2:38 p.m."
        degree="18°"
        colors={["#132462", "#355492", "#5986c4"]}
      />
      <WeatherCard
        city="Turin"
        day="Friday 18,"
        month="september"
        time="3:38 p.m."
        degree="22°"
        colors={["#5f7be2", "#80aded"]}
      />
      <WeatherCard
        city="Rome"
        day="Friday 18,"
        month="september"
        time="3:38 p.m."
        degree="20°"
        colors={["#52586d", "#929eac"]}
      />
    </View>
  );
};

export default CardList;

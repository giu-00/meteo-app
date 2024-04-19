import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/molecules/HeaderText";
import AddCity from "../../components/molecules/AddCity/AddCity";
import Colors from "../../constants/Colors";
import CityText from "../../components/atoms/CityText/CityText";
import DateText from "../../components/atoms/DateText/DateText";
import TimeText from "../../components/atoms/TimeText/TimeText";
import WeatherCard from "../../components/molecules/WeatherCard/WeatherCard";
import CardList from "../../components/organism/CardList/CardList";
import HomeScreenStyle from "./HomeScreen.style";

const HomeScreen = (props) => {
  return (
    <View style={HomeScreenStyle.container}>
      <HeaderText />
      <AddCity />
      {/*<CityText city="London" />
      <DateText day="Friday 18," month="september" />
  <TimeText time="2:38 pm" />
      <View style={HomeScreenStyle.card}>
        <WeatherCard />
      </View>*/}
      <CardList />
    </View>
  );
};

export default HomeScreen;

import React from "react";
import { View } from "react-native";

import HeaderText from "../../components/molecules/HeaderText";
import AddCity from "../../components/molecules/AddCity/AddCity";
import CardList from "../../components/organism/CardList/CardList";
import HomeScreenStyle from "./HomeScreen.style";

const HomeScreen = (props) => {
  return (
    <View style={HomeScreenStyle.container}>
      <HeaderText />
      <AddCity />
      <CardList />
    </View>
  );
};

export default HomeScreen;

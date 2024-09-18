import React, { useEffect } from "react";
import { View } from "react-native";
import HeaderText from "../../components/molecules/HeaderText";
import AddCity from "../../components/molecules/AddCity/AddCity";
import CardList from "../../components/organism/CardList/CardList";
import HomeScreenStyle from "./HomeScreen.style";
import { useDispatch, useSelector } from "react-redux";
import { setCities } from "../../store/weatherSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = (props) => {
  const { username } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (props) => {
    try {
      const jsonCities = JSON.stringify(props);
      await AsyncStorage.setItem("cities_" + username, jsonCities);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const jsonCities = await AsyncStorage.getItem("cities_" + username);
      if (jsonCities && jsonCities.length > 0) {
        dispatch(setCities(JSON.parse(jsonCities)));
      } else {
        setCities([
          { name: "Turin" },
          { name: "Paris" },
          { name: "Rome, IT" },
          { name: "Milan" },
        ]);
        storeData([
          { name: "Turin" },
          { name: "Paris" },
          { name: "Rome, IT" },
          { name: "Milan" },
        ]);
      }
      return jsonCities != null ? jsonCities : null;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={HomeScreenStyle.container}>
      <HeaderText username={username} />
      <AddCity />
      <CardList />
    </View>
  );
};

export default HomeScreen;

import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CityText from "../../atoms/CityText/CityText";
import PlusButton from "../../atoms/PlusButton/PlusButton";
import HeaderInfoStyle from "./HeaderInfo.style";
import DateText from "../../atoms/DateText/DateText";
import WeatherText from "../../atoms/WeatherText/WeatherText";

const HeaderInfo = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[HeaderInfoStyle.info, props.style]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <MaterialCommunityIcons name="arrow-left" size={40} color={"white"} />
        </TouchableOpacity>
        <CityText city={props.city} style={HeaderInfoStyle.city} />
        <PlusButton style={HeaderInfoStyle.button} />
      </View>
      <DateText
        day={props.day}
        month={props.month}
        style={HeaderInfoStyle.date}
      />
      <WeatherText weather={props.weather} />
    </View>
  );
};

export default HeaderInfo;

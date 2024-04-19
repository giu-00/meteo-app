import React from "react";
import { View } from "react-native";

import AddCityStyle from "./AddCity.style";

import PlusButton from "../../atoms/PlusButton/PlusButton";
import TextAddCity from "../../atoms/TextAddCity/TextAddCity";

const AddCity = (props) => {
  return (
    <View style={AddCityStyle.addCity}>
      <PlusButton />
      <TextAddCity />
    </View>
  );
};

export default AddCity;

import React from "react";
import { View, StyleSheet } from "react-native";

import TitleText from "../atoms/TitleText";
import NameText from "../atoms/NameText";

const HeaderText = (props) => {
  return (
    <View>
      <TitleText />
      <NameText />
    </View>
  );
};

export default HeaderText;

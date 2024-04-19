import React from "react";
import { View } from "react-native";

import TitleText from "../atoms/TitleText/TitleText";
import NameText from "../atoms/NameText/NameText";

const HeaderText = () => {
  return (
    <View>
      <TitleText titleText="Good Morning!" />
      <NameText name="Mario" />
    </View>
  );
};

export default HeaderText;

import React from "react";
import { View } from "react-native";

import TitleText from "../atoms/TitleText/TitleText";
import NameText from "../atoms/NameText/NameText";

const HeaderText = (props) => {
  return (
    <View>
      <TitleText titleText="Good Morning!" />
      <NameText username={props.username} />
    </View>
  );
};

export default HeaderText;

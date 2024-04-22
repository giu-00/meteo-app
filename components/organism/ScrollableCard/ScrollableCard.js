import React from "react";
import { View, ScrollView } from "react-native";

import ShortWeatherCard from "../../molecules/ShortWeatherCard/ShortWeatherCard";
import ScrollableCardStyle from "./ScrollableCard.style";

const ScrollableCard = (props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
    >
      <View style={[ScrollableCardStyle.list, props.style]}>
        <ShortWeatherCard day="Saturday" degree="18°" />
        <ShortWeatherCard day="Sunday" degree="21°" />
        <ShortWeatherCard day="Monday" degree="18°" />
      </View>
    </ScrollView>
  );
};

export default ScrollableCard;

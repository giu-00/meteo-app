import React from "react";
import { View, Text } from "react-native";
import ForecastLineStyle from "./ForecastLine.style";
import Line from "../../atoms/Line/Line";
import DegreeDot from "../../atoms/DegreeDot/DegreeDot";
import ForecastTime from "../ForecastTime/ForecastTime";
import ForecastDegree from "../ForecastDegree/ForecastDegree";

const ForecastLine = (props) => {
  return (
    <View style={ForecastLineStyle.container}>
      <ForecastTime />
      <View>
        <Line />
        <View style={ForecastLineStyle.dots}>
          <DegreeDot style={ForecastLineStyle.bigDot} />
          <DegreeDot style={ForecastLineStyle.otherDot} />
          <DegreeDot style={ForecastLineStyle.otherDot} />
          <DegreeDot style={ForecastLineStyle.otherDot} />
          <DegreeDot style={ForecastLineStyle.otherDot} />
          <DegreeDot style={ForecastLineStyle.otherDot} />
        </View>
      </View>
      <ForecastDegree />
    </View>
  );
};

export default ForecastLine;

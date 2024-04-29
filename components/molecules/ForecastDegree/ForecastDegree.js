import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import ForecastDegreeStyle from "./ForecastDegree.style";
import DegreeText from "../../atoms/DegreeText/DegreeText";

const ForecastDegree = (props) => {
  return (
    <View style={ForecastDegreeStyle.container}>
      <DegreeText
        degree="18°"
        style={[ForecastDegreeStyle.degree, ForecastDegreeStyle.bigDegree]}
      />
      <DegreeText degree="18°" style={ForecastDegreeStyle.degree} />
      <DegreeText degree="18°" style={ForecastDegreeStyle.degree} />
      <DegreeText degree="18°" style={ForecastDegreeStyle.degree} />
      <DegreeText degree="18°" style={ForecastDegreeStyle.degree} />
      <DegreeText degree="18°" style={ForecastDegreeStyle.degree} />
    </View>
  );
};

export default ForecastDegree;

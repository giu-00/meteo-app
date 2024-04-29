import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import ForecastTimeStyle from "./ForecastTime.style";
import TimeText from "../../atoms/TimeText/TimeText";
import moment from "moment";

const ForecastTime = (props) => {
  const [currentTime, setCurrentTime] = useState("");
  const [oneHour, setOneHour] = useState("");
  const [twoHour, setTwoHour] = useState("");
  const [threeHour, setThreeHour] = useState("");
  const [fourHour, setFourHour] = useState("");

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().format("LT"));
      setOneHour(moment().add(1, "hours").format("hh:mm A"));
      setTwoHour(moment().add(2, "hours").format("hh:mm A"));
      setThreeHour(moment().add(3, "hours").format("hh:mm A"));
      setFourHour(moment().add(4, "hours").format("hh:mm A"));
    }, "1000");
  }, []);

  return (
    <View style={ForecastTimeStyle.container}>
      <Text style={ForecastTimeStyle.now}>Now</Text>
      <TimeText style={ForecastTimeStyle.later} time={currentTime} />
      <TimeText style={ForecastTimeStyle.later} time={oneHour} />
      <TimeText style={ForecastTimeStyle.later} time={twoHour} />
      <TimeText style={ForecastTimeStyle.later} time={threeHour} />
      <TimeText style={ForecastTimeStyle.later} time={fourHour} />
    </View>
  );
};

export default ForecastTime;

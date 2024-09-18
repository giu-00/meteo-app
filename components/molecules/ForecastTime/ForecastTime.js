import React from "react";
import { View, Text } from "react-native";
import { useEffect } from "react";
import ForecastTimeStyle from "./ForecastTime.style";
import TimeText from "../../atoms/TimeText/TimeText";
import { useDispatch, useSelector } from "react-redux";
import { getForecast } from "../../../store/weatherAction";

const ForecastTime = (props) => {
  const city = props.city;
  const { isForecastLoading, forecastHour, forecastDaily } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast(city));
  }, []);

  return (
    <View style={ForecastTimeStyle.container}>
      {isForecastLoading || !forecastHour ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        forecastHour && (
          <View style={ForecastTimeStyle.container}>
            {forecastHour.map((item, index) => {
              return index === 0 ? (
                <TimeText
                  style={ForecastTimeStyle.now}
                  time={"NOW"}
                  key={index}
                />
              ) : (
                <TimeText
                  style={ForecastTimeStyle.later}
                  time={item.time}
                  key={index}
                />
              );
            })}
          </View>
        )
      )}
    </View>
  );
};

export default ForecastTime;

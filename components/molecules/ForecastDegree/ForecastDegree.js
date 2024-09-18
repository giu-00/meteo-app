import React from "react";
import { View, Text } from "react-native";
import { useEffect } from "react";
import ForecastDegreeStyle from "./ForecastDegree.style";
import DegreeText from "../../atoms/DegreeText/DegreeText";
import { useDispatch, useSelector } from "react-redux";
import { getForecast } from "../../../store/weatherAction";

const ForecastDegree = (props) => {
  const city = props.city;
  const { isForecastLoading, forecastHour, forecastDaily } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast(city));
  }, []);

  return (
    <View style={ForecastDegreeStyle.container}>
      {isForecastLoading || !forecastHour ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        forecastHour && (
          <View style={ForecastDegreeStyle.container}>
            {forecastHour.map((item, index) => {
              return index === 0 ? (
                <DegreeText
                  key={index}
                  style={ForecastDegreeStyle.bigDegree}
                  degree={Math.floor(item.temp) + "°"}
                />
              ) : (
                <DegreeText
                  key={index}
                  style={ForecastDegreeStyle.degree}
                  degree={Math.floor(item.temp) + "°"}
                />
              );
            })}
          </View>
        )
      )}
    </View>
  );
};

export default ForecastDegree;

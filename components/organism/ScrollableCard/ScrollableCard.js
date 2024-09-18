import React from "react";
import { View, Text, FlatList } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShortWeatherCard from "../../molecules/ShortWeatherCard/ShortWeatherCard";
import ScrollableCardStyle from "./ScrollableCard.style";
import WeatherConditions from "../../../constants/WeatherConditions";
import { getForecast } from "../../../store/weatherAction";

const ScrollableCard = (props) => {
  const { isForecastLoading, forecastDaily } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();
  const city = props.city;
  useEffect(() => {
    dispatch(getForecast(city));
  }, []);

  return (
    <View style={ScrollableCardStyle.list}>
      {isForecastLoading || !forecastDaily ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        forecastDaily && (
          <View style={[ScrollableCardStyle.list, props.style]}>
            <FlatList
              data={forecastDaily}
              style={{ width: "100%" }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={(weather) => {
                return (
                  <ShortWeatherCard
                    day={weather.item.date}
                    degree={Math.floor(weather.item.temp) + "°"}
                    image={
                      "https://openweathermap.org/img/wn/" +
                      WeatherConditions[weather.item.weather]?.icon +
                      "@2x.png"
                    }
                  />
                );
              }}
            />
          </View>
        )
      )}
    </View>
  );
};

export default ScrollableCard;

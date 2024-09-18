import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherCard from "../../molecules/WeatherCard/WeatherCard";
import CardListStyle from "./CardList.style";
import WeatherConditions from "../../../constants/WeatherConditions";
import moment from "moment";
import { getWeather } from "../../../store/weatherAction";

const CardList = () => {
  const { APIdata, isLoading, cities } = useSelector((state) => state.weather);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentNumberDay, setCurrentNumberDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setCurrentDayOfWeek(moment().format("dddd") + " ");
      setCurrentNumberDay(moment().format("D") + ",");
      setCurrentMonth(moment().format("MMMM"));
      setCurrentTime(moment().format("LT"));
    }, "1000");
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      dispatch(getWeather(cities));
    }
  }, [cities]);

  return (
    <View style={CardListStyle.list}>
      {isLoading && !APIdata ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        APIdata && (
          <FlatList
            data={APIdata}
            style={{ height: "60%" }}
            renderItem={(city) => {
              return (
                <WeatherCard
                  city={city.item.name}
                  day={[currentDayOfWeek, currentNumberDay]}
                  month={currentMonth}
                  time={currentTime}
                  image={
                    "https://openweathermap.org/img/wn/" +
                    WeatherConditions[city.item.weather[0].main]?.icon +
                    "@2x.png"
                  }
                  degree={Math.floor(city.item.main.temp) + "°"}
                  colors={WeatherConditions[city.item.weather[0].main]?.color}
                  onPress={() => {
                    navigation.navigate("DetailScreen", { city: city.item });
                  }}
                />
              );
            }}
          />
        )
      )}
    </View>
  );
};

export default CardList;

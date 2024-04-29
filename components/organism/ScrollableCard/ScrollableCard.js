import React from "react";
import { View, ScrollView, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import ShortWeatherCard from "../../molecules/ShortWeatherCard/ShortWeatherCard";
import ScrollableCardStyle from "./ScrollableCard.style";
import WeatherConditions from "../../../constants/WeatherConditions";

const ScrollableCard = (props) => {
  const [oneDay, setOneDay] = useState("");
  const [twoDay, setTwoDay] = useState("");
  const [threeDay, setThreeDay] = useState("");
  const [fourDay, setFourDay] = useState("");
  const [fiveDay, setFiveDay] = useState("");
  useEffect(() => {
    setOneDay(moment().add(1, "days").format("dddd"));
    setTwoDay(moment().add(2, "days").format("dddd"));
    setThreeDay(moment().add(3, "days").format("dddd"));
    setFourDay(moment().add(4, "days").format("dddd"));
    setFiveDay(moment().add(5, "days").format("dddd"));
  }, []);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState();
  const [cities, setCities] = useState([
    { name: "London" },
    { name: "Turin" },
    { name: "Rome, IT" },
    { name: "Atene" },
  ]);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const promises = cities.map((item) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${item.name}&appid=6396264a12f3ff405e9508bd72955890&units=metric`
          )
        );
        const responses = await Promise.all(promises);
        const data = responses.map((response) => response.data);

        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.warn("error Api:", error);
      }
    };
    fetchWeather();
  }, [days]);

  return (
    // <ScrollView
    //   horizontal={true}
    //   showsHorizontalScrollIndicator={false}
    //   pagingEnabled={true}
    // >
    //   <View style={[ScrollableCardStyle.list, props.style]}>
    //     <ShortWeatherCard day="Saturday" degree="18°" />
    //     <ShortWeatherCard day="Sunday" degree="21°" />
    //     <ShortWeatherCard day="Monday" degree="18°" />
    //   </View>
    // </ScrollView>
    <View style={ScrollableCardStyle.list}>
      {isLoading || !data ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        data && (
          <View style={[ScrollableCardStyle.list, props.style]}>
            <FlatList
              data={data}
              style={{ width: "100%" }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={(city) => {
                return (
                  <ShortWeatherCard
                    day={[oneDay]}
                    degree={Math.floor(city.item.list[0].main.temp) + "°"}
                    colors={
                      WeatherConditions[city.item.list[0].weather[0].main]
                        ?.color || ["#132462", "#355492", "#5986c4"]
                    }
                    onPress={() => {
                      navigation.navigate("DetailScreen", { city: city.item });
                    }}
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

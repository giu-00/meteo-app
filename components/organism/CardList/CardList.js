import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../../molecules/WeatherCard/WeatherCard";
import CardListStyle from "./CardList.style";
import WeatherConditions from "../../../constants/WeatherConditions";
import moment from "moment";

const CardList = (props) => {
  const navigation = useNavigation();

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

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState([
    { name: "London" },
    { name: "Turin" },
    { name: "Rome, IT" },
    { name: "Atene" },
  ]);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const promises = cities.map((item) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${item.name}&appid=6396264a12f3ff405e9508bd72955890&units=metric`
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
    fetchCity();
  }, [cities]);

  return (
    <View style={CardListStyle.list}>
      {isLoading || !data ? (
        <View>
          <Text>Caricamento...</Text>
        </View>
      ) : (
        data && (
          <FlatList
            data={data}
            style={{ height: "60%" }}
            renderItem={(city) => {
              return (
                <WeatherCard
                  city={city.item.name}
                  day={[currentDayOfWeek, currentNumberDay]}
                  month={currentMonth}
                  time={currentTime}
                  degree={Math.floor(city.item.main.temp) + "°"}
                  colors={
                    WeatherConditions[city.item.weather[0].main]?.color || [
                      "#132462",
                      "#355492",
                      "#5986c4",
                    ]
                  }
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

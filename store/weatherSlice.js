import { createSlice } from "@reduxjs/toolkit";
import { getForecast, getWeather } from "./weatherAction";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  APIdata: [],
  isLoading: false,
  isForecastLoading: false,
  forecastHour: [],
  forecastDaily: [],
  cities: [],
  username: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    addCity(state, action) {
      state.cities.push({ name: action.payload });
      const jsonCities = JSON.stringify(state.cities);
      AsyncStorage.setItem("cities_" + state.username, jsonCities);
    },
    setCities(state, action) {
      state.cities = action.payload;
    },
    removeCity(state, action) {
      state.cities.splice(
        state.cities.findIndex((item) => item.field === action.payload),
        1
      );
      const jsonCities = JSON.stringify(state.cities);
      AsyncStorage.setItem("cities_" + state.username, jsonCities);
    },
    setUsers(state, action) {
      state.username.push(action.payload);
      console.log(state.username);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.APIdata = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getWeather.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getForecast.fulfilled, (state, action) => {
      state.forecastDaily = action.payload;
      state.forecastHour = action.payload.list
        .filter((item, index) => index <= 5)
        .map((item) => {
          return {
            temp: item.main.temp,
            time: moment(item.dt_txt).format("h a"),
          };
        });
      state.forecastDaily = action.payload.list
        .filter((item) => {
          return item.dt_txt.endsWith("15:00:00");
        })
        .map((day) => {
          return {
            date: moment(day.dt_txt).format("dddd"),
            temp: day.main.temp,
            weather: day.weather[0].main,
          };
        });
      state.isForecastLoading = false;
    });
    builder.addCase(getForecast.pending, (state, action) => {
      state.isForecastLoading = true;
    });
  },
});

export const { addCity, setCities, removeCity, setUsers } =
  weatherSlice.actions;
export default weatherSlice.reducer;

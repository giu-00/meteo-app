import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppId from "../constants/AppId";

export const getWeather = createAsyncThunk("getWeather", async (cities) => {
  try {
    const promises = cities.map((item) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${item.name}&appid=${AppId.appId}&units=metric`
      )
    );
    const responses = await Promise.all(promises);
    const data = responses.map((response) => response.data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getForecast = createAsyncThunk("getForecast", async (city) => {
  try {
    const promises = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${AppId.appId}&units=metric`
    );

    return promises.data;
  } catch (error) {
    console.log(error);
  }
});

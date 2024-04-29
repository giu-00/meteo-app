import React, { useState, useEffect } from "react";

export const getFullDate = () => {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentNumberDay, setCurrentNumberDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "january",
      "february",
      "march",
      "april",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    let date = new Date();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();

    setCurrentDayOfWeek(daysOfWeek[date.getDay()] + " ");
    setCurrentNumberDay(date.getDate() + ",");
    setCurrentMonth(months[date.getMonth()]);
    setCurrentTime(hours + ":" + min);
  }, []);
};

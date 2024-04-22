const currentDate = () => {
  const date = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentNumberDay = date.getDate();

  const currentDayOfWeek = daysOfWeek[date.getDay()];

  const currentTime = date.toLocaleTimeString();

  return currentNumberDay, currentDayOfWeek, currentTime;
};

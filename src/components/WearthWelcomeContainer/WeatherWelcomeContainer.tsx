import React from "react";
import "../WearthWelcomeContainer/WeatherWelcomeContainer.css";

type WeatherDayBlock = {
  title: string;
  time: string;
  data: string;
};

const WeatherWelcomeContainer: React.FC<WeatherDayBlock> = (weatherDay) => {
  return (
    <div className="weather-block">
      <p className="values-weather-name">{weatherDay.title}</p>
      <h1 className="values-weather">{weatherDay.time}</h1>
      <h3 className="values-weather">{weatherDay.data}</h3>
    </div>
  );
};

export default WeatherWelcomeContainer;

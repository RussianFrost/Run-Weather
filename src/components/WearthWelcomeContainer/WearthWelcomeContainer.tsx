import React from "react";
import "../WearthWelcomeContainer/WeatherWelcomeContainer.css";
import { Typography, Paper } from "@mui/material";

type WeatherDayBlock = {
  title: string;
  time: string;
  data: string;
};

const WeatherWelcomeContainer: React.FC<WeatherDayBlock> = (weatherDay) => {
  return (
    <div className="weather-block">
      <Typography variant="body1" className="values-weather-name">
        {weatherDay.title}
      </Typography>
      <Typography variant="h5" className="values-weather">
        {weatherDay.time}
      </Typography>
      <Typography variant="h6" className="values-weather">
        {weatherDay.data}
      </Typography>
    </div>
  );
};

export default WeatherWelcomeContainer;

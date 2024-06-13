import React from "react";
import "../pages/Home/Home.css";
import { Typography } from "@mui/material";

type WeatherDayBlock = {
  time: any;
  data: any;
};

const WeatherWelcomeContainer: React.FC<WeatherDayBlock> = (weatherday) => {
  return (
    <div className="wearth-block">
      <Typography variant="body1" className="values-wearth-name">
        Лучшее время для бега:
      </Typography>
      <Typography variant="h5" className="values-wearth">
        {weatherday.time}
      </Typography>
      <Typography variant="h6" className="values-wearth">
        {weatherday.data}
      </Typography>
    </div>
  );
};

export default WeatherWelcomeContainer;

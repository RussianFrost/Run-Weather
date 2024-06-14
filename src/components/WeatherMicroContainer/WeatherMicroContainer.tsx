import React from "react";
import { Typography } from "@mui/material";
import "../WeatherMicroContainer/WeatherMicroContainer.css";

type WeatherMicroBlocks = {
  title: string;
  data: string;
  desctiption?: string;
};

const WeatherMicroContainer: React.FC<WeatherMicroBlocks> = (weatherMicro) => {
  return (
    <div className="micro-blocks">
      <Typography variant="button" className="micro-name">
        {weatherMicro.title}
      </Typography>
      <Typography variant="h4">{weatherMicro.data}</Typography>
      <Typography variant="h6">{weatherMicro.desctiption}</Typography>
    </div>
  );
};

export default WeatherMicroContainer;

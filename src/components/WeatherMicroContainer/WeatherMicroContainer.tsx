import React from "react";
import { Typography } from "@mui/material";
import "../WeatherMicroContainer/WeatherMicroContainer.css";

type WeatherMicroBlocks = {
  title: string;
  data: string;
  description?: string;
};

const WeatherMicroContainer: React.FC<WeatherMicroBlocks> = (weatherMicro) => {
  return (
    <div className="micro-blocks">
      <Typography variant="button" className="micro-name">
        {weatherMicro.title}
      </Typography>
      <Typography variant="h4" className="micro-data">{weatherMicro.data}</Typography>
      <Typography variant="h6" className="micro-data">{weatherMicro.description}</Typography>
    </div>
  );
};

export default WeatherMicroContainer;

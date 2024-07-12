import React from "react";
import { Typography } from "@mui/material";
import "../WearthMainComponent/WearthMainComponent.css";

type WeatherMicroBlocks = {
  title: string;
  data: string;
  description?: string;
};

const WeatherMicroContainer: React.FC<WeatherMicroBlocks> = (weatherMicro) => {
  return (
    <div className="main-container">
      
    </div>
  );
};

export default WeatherMicroContainer;
import React from "react";
import { Typography } from "@mui/material";
import "../WeatherMicroContainer/WeatherMicroContainer.css";

type WearherMicroBlocks = {
  type: any;
  data: any;
  time: any;
  uv: any;
  weather: any;
};

const WeatherMicroContainers: React.FC<WearherMicroBlocks> = (wearhermicro) => {
  return (
    <div className="micro-blocks">
      <Typography variant="button" className="micro-name">
        {wearhermicro.type}
      </Typography>
      <Typography variant="h4">{wearhermicro.data}</Typography>
      <Typography variant="h6">
        {wearhermicro.uv}
        {wearhermicro.weather}
      </Typography>
    </div>
  );
};

export default WeatherMicroContainers;

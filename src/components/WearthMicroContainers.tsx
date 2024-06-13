import React from "react";
import { Paper, Typography } from "@mui/material";
import wearthWeekBlock from "./WearthWeekBlock";

type WearherMicroBlocks = {
  type: any;
  data: any;
  time: any;
  uv: any;
  weather: any;
};

const WeatherMicroContainers: React.FC<WearherMicroBlocks> = (wearhermicro) => {
  return (
    <div className="wether-micro-name">
      <Typography
        variant="button"
        className="micro-name"
        sx={{ color: "rgb(152,177,212)" }}
      >
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

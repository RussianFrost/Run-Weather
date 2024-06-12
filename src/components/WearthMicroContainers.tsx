import React from "react";
import {Paper, Typography} from "@mui/material";
import wearthWeekBlock from "./WearthWeekBlock";

type WearherMicroBlocks = {
    type: any;
    data: any;
    time: any;
    uv: any;
    weather: any;
}

const WeatherMicroContainers: React.FC<WearherMicroBlocks> = (wearhermicro) => {
  return (
      <div className="weather-micro-container">
          <div className="weather-micro-block">
            <div className="wether-micro-name">
                <Typography variant="button" fontSize="small" sx={{color: "grey"}}>
                    {wearhermicro.type}
                </Typography>
                <Typography variant="h4" fontSize="small">
                    {wearhermicro.data}
                </Typography>
                <Typography variant="h6" fontSize="small">
                    {wearhermicro.uv}
                    {wearhermicro.weather}
                </Typography>
            </div>
          </div>
      </div>
  );
};

export default WeatherMicroContainers;

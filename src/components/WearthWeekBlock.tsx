import React from "react";
import { Typography } from "@mui/material";

type WeatherWeekProps = {
  time: any;
  degrees: any;
};

const WeatherWeekBlock: React.FC<WeatherWeekProps> = (weatherweek) => {
  return (
    <div className="wearth-week">
      <div className="wearth-day">
        <Typography variant="button" fontSize="small">
          {weatherweek.time}
        </Typography>
        <Typography variant="button" fontSize="small">
          {weatherweek.degrees}
        </Typography>
      </div>
    </div>
  );
};

export default WeatherWeekBlock;

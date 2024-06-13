import React from "react";
import { Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { yellow } from "@mui/material/colors";

type WeatherDayProps = {
  city: any;
  weatherdata: any;
  weatheraverage: any;
  weatherstatus: any;
};

const WeatherDayBlock: React.FC<WeatherDayProps> = (weatherday) => {
  return (
    <div className="wearth-block-status">
      <div className="wearth-city">
        <Typography variant="button"> {weatherday.city} </Typography>
        <Typography variant="h4"> {weatherday.weatherdata} </Typography>
      </div>
      <div className="wearth-status">
        <WbSunnyIcon fontSize="small" sx={{ color: yellow[600] }} />
        <Typography variant="button" fontSize="small">
          {weatherday.weatherstatus}
        </Typography>
        <Typography variant="button">{weatherday.weatheraverage}</Typography>
      </div>
    </div>
  );
};

export default WeatherDayBlock;

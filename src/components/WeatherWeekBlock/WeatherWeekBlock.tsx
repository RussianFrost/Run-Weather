import React from "react";
import { Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { yellow } from "@mui/material/colors";
import "../WeatherWeekBlock/WeatherWeekBlock.css";

type WeatherDayProps = {
  city: string;
  weatherData: string;
  weatherAverage: string;
  weatherStatus: string;
  sixHoursData: { time: string; degree: string }[];
};

const WeatherDayBlock: React.FC<WeatherDayProps> = (props) => {
  return (
    <div className="weather-block-status">
      <div className="weather-now">
        <div className="weather-city">
          <Typography variant="button"> {props.city} </Typography>
          <Typography variant="h4"> {props.weatherData} </Typography>
        </div>
        <div className="weather-status">
          <WbSunnyIcon fontSize="small" sx={{ color: yellow[600] }} />
          <Typography variant="button" fontSize="small">
            {props.weatherStatus}
          </Typography>
          <Typography variant="button">{props.weatherAverage}</Typography>
        </div>
      </div>
      <div className="weather-week">
        {props.sixHoursData.map((hour, index) => (
          <div className="weather-day">
            <Typography
              key={index}
              variant="button"
              fontSize="small"
              sx={{ padding: "5px" }}
            >
              {hour.time}
            </Typography>
            <Typography
              key={index}
              variant="button"
              fontSize="small"
              sx={{ padding: "5px" }}
            >
              {hour.degree}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDayBlock;

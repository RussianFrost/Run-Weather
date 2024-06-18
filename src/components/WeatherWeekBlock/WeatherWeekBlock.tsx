import React from "react";
import { Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { yellow } from "@mui/material/colors";
import "../WeatherWeekBlock/WeatherWeekBlock.css";

type WeatherDayProps = {
  city: string;
  weatherCurrentDegree: string;
  weatherHigherLowerDegree: string;
  weatherCondition: string;
  sixHoursData: { time: string; degree: string }[];
};

const WeatherDayBlock: React.FC<WeatherDayProps> = (props) => {
  return (
    <div className="weather-block-status">
      <div className="weather-now">
        <div className="weather-city">
          <Typography variant="button"> {props.city} </Typography>
          <Typography variant="h4"> {props.weatherCurrentDegree} </Typography>
        </div>
        <div className="weather-status">
          <WbSunnyIcon className="color-icon" fontSize="small" />
          <Typography variant="button" fontSize="small">
            {props.weatherCondition}
          </Typography>
          <Typography variant="button">{props.weatherHigherLowerDegree}</Typography>
        </div>
      </div>
      <div className="weather-week">
        {props.sixHoursData.map((hour, index) => (
          <div className="weather-day">
            <Typography
              key={index}
              variant="button"
              fontSize="small"
              className="typography-time"
            >
              {hour.time}
            </Typography>
            <Typography
              key={index}
              variant="button"
              fontSize="small"
              className="typography-degree"
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

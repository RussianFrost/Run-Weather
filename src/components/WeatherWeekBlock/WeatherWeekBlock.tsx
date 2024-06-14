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
  sixHoursDegrees: string[];
  sixHoursTime: string[];
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
        <div className="weather-day">
          <div className="weather-hour">
            {props.sixHoursTime.map((data, index) => (
              <Typography key={index} variant="button" fontSize="small">
                {data}
              </Typography>
            ))}
          </div>
          <div className="weather-degrees">
            {props.sixHoursDegrees.map((data, index) => (
              <Typography key={index} variant="button" fontSize="small">
                {data}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDayBlock;

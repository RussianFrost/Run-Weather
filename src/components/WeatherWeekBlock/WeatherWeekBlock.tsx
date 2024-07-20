import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
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
          <b> {props.city} </b>
          <h1>
            {props.weatherCurrentDegree}&deg;
          </h1>
        </div>
        <div className="weather-status">
          <WbSunnyIcon className="color-icon" fontSize="small" />
          <p>
            {props.weatherCondition}
          </p>
          <p>
            {props.weatherHigherLowerDegree}
          </p>
        </div>
      </div>
      <div className="weather-week">
        {props.sixHoursData.map((hour, index) => (
          <div key={index} className="weather-day">
            <p
              className="typography-padding-5"
            >
              {hour.time}
            </p>
            <p
              className="typography-padding-5"
            >
              {hour.degree}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDayBlock;

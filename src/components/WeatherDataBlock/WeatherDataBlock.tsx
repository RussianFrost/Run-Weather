import React from "react";
import "./WeatherDataBlock.css";
import "@fontsource/inter/100.css";

type WeatherDataBlockType = {
  windSpeed: string;
  temperature: string;
  humidity: string;
};

const WeatherDataBlock: React.FC<WeatherDataBlockType> = ({
  windSpeed,
  temperature,
  humidity,
}) => {
  return (
    <div className="weather-data-container">
      <div className="weather-data-block">
        <p className="weather-data-name">Ветер</p>
        <b className="weather-data-number">{windSpeed}</b>
        <p className="weather-data-sub">м/с</p>
      </div>
      <div className="weather-data-block">
        <p className="weather-data-name">Температура</p>
        <b className="weather-data-number">{temperature}</b>
        <p className="weather-data-sub">°C</p>
      </div>
      <div className="weather-data-block">
        <p className="weather-data-name">Влажность</p>
        <b className="weather-data-number">{humidity}</b>
        <p className="weather-data-sub">%</p>
      </div>
    </div>
  );
};

export default WeatherDataBlock;

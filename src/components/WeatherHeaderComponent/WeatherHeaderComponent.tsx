import React from "react";
import "./WeatherHeaderComponent.css";
import "@fontsource/inter/100.css";
import WeatherDataBlock from "../WeatherDataBlock/WeatherDataBlock";

type WeatherHeaderComponentData = {
  windSpeed: string;
  temperature: string;
  humidity: string;
  cityName: string;
};

const WeatherHeaderComponent: React.FC<WeatherHeaderComponentData> = ({
  windSpeed,
  temperature,
  humidity,
  cityName,
}) => {
  return (
    <div className="main-container">
      <div className="best-time-today">
        <h6 className="city-name">{cityName}</h6>
        <div className="best-time-data-block">
          <h6 className="best-time-data">15:00</h6>
          <h6 className="best-time-data">-</h6>
          <h6 className="best-time-data">17:00</h6>
        </div>
        <p className="best-time-text">Лучшее время сегодня</p>
      </div>
      <WeatherDataBlock
        windSpeed={windSpeed}
        temperature={temperature}
        humidity={humidity}
      ></WeatherDataBlock>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 393 60"
        className="wave-svg"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M-82 12.6001L-60.25 15.2417C-38.5 17.7845 5 23.2157 48.5 24.4501C92 25.6845 135.5 23.2157 179 16.5501C222.5 9.88447 266 -0.484284 309.5 0.750091C353 1.98447 396.5 15.3157 418.25 21.8085L440 28.4001V60.0001H418.25C396.5 60.0001 353 60.0001 309.5 60.0001C266 60.0001 222.5 60.0001 179 60.0001C135.5 60.0001 92 60.0001 48.5 60.0001C5 60.0001 -38.5 60.0001 -60.25 60.0001H-82V12.6001Z"
        />
      </svg>
    </div>
  );
};

export default WeatherHeaderComponent;

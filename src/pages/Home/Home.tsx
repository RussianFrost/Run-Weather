import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherHeaderComponent from "../../components/WeatherHeaderComponent/WeatherHeaderComponent";
import WeatherChartComponent from "../../components/WeatherChartComponent/WeatherChartComponent";
import { WeatherData } from "../../services/models/weather-data";
import { useWeathersApi } from "../../services/useWeatherApi";
import "./Home.css";

const Home = () => {
  const [todayWeatherData, setTodayWeatherData] = useState<WeatherData | null>(
    null,
  );

  useEffect(() => {
    getTodayWeather();
  }, []);

  function getTodayWeather(): void {
    useWeathersApi
      .getDayWeather()
      .then((weather) => {
        setTodayWeatherData(weather?.data || null);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function getWindSpeed(): string {
    return todayWeatherData?.current?.wind_kph?.toString() || "";
  }
  function getTemperature(): string {
    return todayWeatherData?.current?.temp_c?.toString() || "";
  }
  function getHumidity(): string {
    return todayWeatherData?.current?.humidity?.toString() || "";

  }
  function getCityName(): string{
    return todayWeatherData?.location?.name?.toString() || "";
  }

  return (
    <div className="home-page">
      <WeatherHeaderComponent
          windSpeed={getWindSpeed()}
          temperature={getTemperature()}
          humidity={getHumidity()}
          cityName={getCityName()}
      />
        <WeatherChartComponent chartTitle={"График погоды:"}></WeatherChartComponent>
    </div>
  );
};

export default Home;

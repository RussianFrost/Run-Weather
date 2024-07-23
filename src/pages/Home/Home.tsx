import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherMainComponent from "../../components/WeatherMainComponent/WeatherMainComponent";
import WeatherScheduleDay from "../../components/WeatherScheduleDay/WeatherScheduleDay";
import { WeatherData } from "../../services/models/weather-data";
import { useWeathersApi } from "../../services/useWeathersApi";
import "./Home.css";

const Home = () => {
  const [todayWeatherData, setTodayWeatherData] = useState<WeatherData | null>(
    null,
  );

  useEffect(() => {
    getTodayWeather();
  }, []);

  function getTodayWeather() {
    useWeathersApi
      .getDayWeather()
      .then((weather) => {
        setTodayWeatherData(weather?.data || null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="home-page">
      <WeatherMainComponent
        windData={todayWeatherData?.current.wind_kph.toString() || ""}
        temperatureData={todayWeatherData?.current.temp_c.toString() || ""}
        humidityData={todayWeatherData?.current.humidity.toString() || ""}
        cityName={todayWeatherData?.location.name.toString() || ""}
      />
      <b className="weather-schedule-title">График погоды:</b>
        <WeatherScheduleDay></WeatherScheduleDay>
    </div>
  );
};

export default Home;

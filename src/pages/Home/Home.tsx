import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherHeaderComponent from "../../components/WeatherHeaderComponent/WeatherHeaderComponent";
import WeatherChartDay from "../../components/WeatherScheduleDay/WeatherChartDay";
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
      <WeatherHeaderComponent
        windSpeed={todayWeatherData?.current.wind_kph.toString() || ""}
        temperature={todayWeatherData?.current.temp_c.toString() || ""}
        humidity={todayWeatherData?.current.humidity.toString() || ""}
        cityName={todayWeatherData?.location.name.toString() || ""}
      />
        <WeatherChartDay></WeatherChartDay>
    </div>
  );
};

export default Home;

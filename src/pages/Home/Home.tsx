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
  function getWindData() {
    return {
      windSpeed: todayWeatherData?.current?.wind_kph?.toString() || "",
    };
  }
  function getTemperatureData() {
    return{
      temperature: todayWeatherData?.current?.temp_c?.toString() || "",
    }
  }
  function getHumidityData() {
    return{
      humidity: todayWeatherData?.current?.humidity?.toString() || "",
    }
  }
  function getCityNameData(){
    return{
      cityName: todayWeatherData?.location?.name?.toString() || "",
    }
  }

  return (
    <div className="home-page">
      <WeatherHeaderComponent
          windSpeed={getWindData().windSpeed}
          temperature={getTemperatureData().temperature}
          humidity={getHumidityData().humidity}
          cityName={getCityNameData().cityName}
      />
        <WeatherChartComponent chartTitle={"График погоды:"}></WeatherChartComponent>
    </div>
  );
};

export default Home;

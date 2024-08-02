import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherHeaderComponent from "../../components/WeatherHeaderComponent/WeatherHeaderComponent";
import WeatherChartComponent from "../../components/WeatherChartComponent/WeatherChartComponent";
import { WeatherData } from "../../services/models/weather-data";
import { useWeathersApi } from "../../services/useWeatherApi";
import "./Home.css";

const Home = () => {
  const [todayWeatherData, setTodayWeatherData] = useState<WeatherData | null>(null);
  const [bestHour, setBestHour] = useState<{ startTime: string, endTime: string, temperature: string, windSpeed: string, humidity: string } | null>(null);

  useEffect(() => {
    getTodayWeather();
  }, []);

  useEffect(() => {
    if (todayWeatherData) {
      const bestTime = bestWeather(todayWeatherData);
      setBestHour(bestTime);
    }
  }, [todayWeatherData]);

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

  function bestWeather(data: WeatherData) {
    const hours = data.forecast.forecastday[0].hour;
    let bestTime = hours[0];

    for (const hour of hours) {
      if (Number(hour.temp_c) > Number(bestTime.temp_c) && 
          Number(hour.wind_kph) < Number(bestTime.wind_kph) && 
          Number(hour.humidity) < Number(bestTime.humidity)) {
        bestTime = hour;
      }
    }

    const startHour = bestTime.time.split(" ")[1];
    const startDate = new Date(`${bestTime.time.split(" ")[0]}T${startHour}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

    const endHour = endDate.toTimeString().split(" ")[0].slice(0, 5);
    
    return {
      startTime: startHour,
      endTime: endHour,
      temperature: bestTime.temp_c.toString(),
      windSpeed: bestTime.wind_kph.toString(),
      humidity: bestTime.humidity.toString(),
    };
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

  function getCityName(): string {
    return todayWeatherData?.location?.name?.toString() || "";
  }

  return (
    <div className="home-page">
      <WeatherHeaderComponent
        startHour={bestHour?.startTime || ""}
        endHour={bestHour?.endTime || ""}
        windSpeed={bestHour?.windSpeed || getWindSpeed()}
        temperature={bestHour?.temperature || getTemperature()}
        humidity={bestHour?.humidity || getHumidity()}
        cityName={getCityName()}
      />
      <WeatherChartComponent chartTitle={"График погоды:"}></WeatherChartComponent>
    </div>
  );
};

export default Home;




import React, { useEffect, useState } from "react";
import "@fontsource/inter/";
import "./Home.css";
import { Typography } from "@mui/material";
import WeatherWeekBlock from "../../components/WeatherWeekBlock/WeatherWeekBlock";
import WeatherMicroContainer from "../../components/WeatherMicroContainer/WeatherMicroContainer";
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer/WeatherWelcomeContainer";
import { useWeathersApi } from "../../services/useWeathersApi";
import { WeatherData } from "../../services/models/weather-data";
import WeatherMainComponent from "../../components/WeatherMainComponent/WeatherMainComponent";

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
        <WeatherMainComponent></WeatherMainComponent>
      <Typography variant="h5" className="welcome-name">
        Добро пожаловать!
      </Typography>
      <WeatherWelcomeContainer
        time={"15:00 - 17:00"}
        data={"24 С, 2 m/s"}
        title={"Лучшее время бега:"}
      ></WeatherWelcomeContainer>
      <Typography variant="button" className="weather-typography-today">
        Погода сегодня:
      </Typography>
      <div className="wearth-today-block">
        <WeatherWeekBlock
          city={todayWeatherData?.location.name || ""}
          weatherCurrentDegree={todayWeatherData?.current.temp_c || ""}
          weatherCondition={"Sunny"}
          weatherHigherLowerDegree={"H:88° L:57°"}
          sixHoursData={[
            { time: "1PM", degree: "84" },
            { time: "2PM", degree: "81" },
            { time: "3PM", degree: "80" },
            { time: "4PM", degree: "54" },
            { time: "5PM", degree: "34" },
            { time: "6PM", degree: "12" },
          ]}
        ></WeatherWeekBlock>
      </div>
      <div className="weather-all-micro-blocks">
        <WeatherMicroContainer
          title={"UV INDEX"}
          data={todayWeatherData?.current.uv || ""}
          description={"Moderate"}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"SUNRISE"}
          data={todayWeatherData?.forecast.forecastday[0].astro.sunrise || ""}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"WIND"}
          data={todayWeatherData?.current.wind_kph + " km/h"}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"FEELS LIKE"}
          data={todayWeatherData?.current.feelslike_c + "\u00B0"}
        ></WeatherMicroContainer>
      </div>
    </div>
  );
};
   
export default Home;
 
import React, {useEffect, useState} from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Home.css";
import { Typography } from "@mui/material";
import WeatherWeekBlock from "../../components/WeatherWeekBlock/WeatherWeekBlock";
import WeatherMicroContainer from "../../components/WeatherMicroContainer/WeatherMicroContainer";
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer/WeatherWelcomeContainer";
import {useWeathersApi} from "../../services/useWeathersApi";


const Home = () => {

    const [weatherDay, setWeatherDay] = useState<any>(null);

    useEffect(() => {
        useWeathersApi.getDayWeather().then((weather) => {
            if (weather && weather.data) {
                setWeatherDay(weather.data);
            }
        }).catch(error => {
            console.error(error);
        });
    }, []);

  return (
    <div className="home-page">
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
          city={weatherDay?.location.name}
          weatherCurrentDegree={weatherDay?.current.temp_c}
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
          data={weatherDay?.current.uv}
          description={"Moderate"}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"SUNRISE"}
          data={weatherDay?.forecast.forecastday[0].astro.sunrise}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"WIND"}
          data={weatherDay?.current.wind_kph + " km/h"}
         ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"FEELS LIKE"}
          data={weatherDay?.current.feelslike_c + "°"}
        ></WeatherMicroContainer>
      </div>
    </div>
  );
};

export default Home;

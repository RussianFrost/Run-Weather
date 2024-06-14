import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Home.css";
import { Paper, Typography } from "@mui/material";
import WeatherWeekBlock from "../../components/WeatherWeekBlock/WeatherWeekBlock";
import WeatherMicroContainers from "../../components/WeatherMicroContainer/WeatherMicroContainers";
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer/WearthWelcomeContainer";

const Home = () => {
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
          city={"Sonoma"}
          weatherData={"76°"}
          weatherStatus={"Sunny"}
          weatherAverage={"H:88° L:57°"}
          sixHoursTime={["1AM", "2AM", "3AM", "4AM", "5AM", "6AM"]}
          sixHoursDegrees={["76°", "75°", "84°", "74°", "87°", "71°"]}
        ></WeatherWeekBlock>
      </div>
      <div className="weather-all-micro-blocks">
        <WeatherMicroContainers
          type={"UV INDEX"}
          data={"4"}
          uv={"Moderate"}
          time={""}
          weather={""}
        ></WeatherMicroContainers>
        <WeatherMicroContainers
          type={"SUNRICE"}
          data={"5:28 AM"}
          uv={""}
          time={"Sunset: 7:25PM"}
          weather={""}
        ></WeatherMicroContainers>
        <WeatherMicroContainers
          type={"WIND"}
          data={"9.7 km/h"}
          uv={""}
          time={""}
          weather={""}
        ></WeatherMicroContainers>
        <WeatherMicroContainers
          type={"FEELS LIKE"}
          data={"19°"}
          uv={""}
          time={""}
          weather={""}
        ></WeatherMicroContainers>
      </div>
    </div>
  );
};

export default Home;

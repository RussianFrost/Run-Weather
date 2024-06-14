import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Home.css";
import { Typography } from "@mui/material";
import WeatherWeekBlock from "../../components/WeatherWeekBlock/WeatherWeekBlock";
import WeatherMicroContainers from "../../components/WeatherMicroContainer/WeatherMicroContainers";
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer/WeatherWelcomeContainer";

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
        <WeatherMicroContainers
          title={"UV INDEX"}
          data={"4"}
          desctiption={"Moderate"}
        ></WeatherMicroContainers>
        <WeatherMicroContainers
          title={"SUNRICE"}
          data={"5:28 AM"}
        ></WeatherMicroContainers>
        <WeatherMicroContainers
          title={"WIND"}
          data={"9.7 km/h"}
        ></WeatherMicroContainers>
        <WeatherMicroContainers
          title={"FEELS LIKE"}
          data={"19°"}
        ></WeatherMicroContainers>
      </div>
    </div>
  );
};

export default Home;

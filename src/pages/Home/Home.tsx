import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Home.css";
import { Paper, Typography } from "@mui/material";
import WeatherWeekBlock from "../../components/WearthWeekBlock";
import WeatherMicroContainers from "../../components/WearthMicroContainers";
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer";
import WeatherDayBlock from "../../components/WearthDayBlock";

const Home = () => {
  return (
    <div className="home-page">
      <Typography variant="h5" className="welcome-name">
        Добро пожаловать!
      </Typography>

      <Paper
        className="wearth-block"
        variant="elevation"
        elevation={1}
        sx={{
          backgroundColor: "#5d63d1",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <WeatherWelcomeContainer
          time={"15:00 - 17:00"}
          data={"24 С, 2 m/s"}
        ></WeatherWelcomeContainer>
      </Paper>

      <Typography variant="button" className="wearth-typography-today">
        Погода сегодня:
      </Typography>
      <Paper
        className="wearth-today-block"
        variant="elevation"
        elevation={1}
        sx={{
          backgroundColor: "#5d63d1",
          color: "white",
        }}
      >
        <WeatherDayBlock
          city={"Sonoma"}
          weatherdata={"76°"}
          weatherstatus={"Sunny"}
          weatheraverage={"H:88° L:57°"}
        ></WeatherDayBlock>
        <div className="wearth-week">
          <WeatherWeekBlock time={"9AM"} degrees={"77°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"10AM"} degrees={"80°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"11AM"} degrees={"81°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"12AM"} degrees={"81°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"1PM"} degrees={"85°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"2PM"} degrees={"88°"}></WeatherWeekBlock>
        </div>
      </Paper>
      <div className="weather-all-micro-blocks">
        <Paper
          className="micro-blocks"
          sx={{
            backgroundColor: "#5d63d1",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="weather-micro-container">
            <WeatherMicroContainers
              type={"UV INDEX"}
              data={"4"}
              uv={"Moderate"}
              time={""}
              weather={""}
            ></WeatherMicroContainers>
          </div>
        </Paper>
        <Paper
          className="micro-blocks"
          sx={{
            backgroundColor: "#5d63d1",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <WeatherMicroContainers
            type={"SUNRICE"}
            data={"5:28 AM"}
            uv={""}
            time={"Sunset: 7:25PM"}
            weather={""}
          ></WeatherMicroContainers>
        </Paper>
        <Paper
          className="micro-blocks"
          sx={{
            backgroundColor: "#5d63d1",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="weather-micro-container">
            <WeatherMicroContainers
              type={"WIND"}
              data={"9.7 km/h"}
              uv={""}
              time={""}
              weather={""}
            ></WeatherMicroContainers>
          </div>
        </Paper>
        <Paper
          className="micro-blocks"
          sx={{
            backgroundColor: "#5d63d1",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="weather-micro-container">
            <WeatherMicroContainers
              type={"FEELS LIKE"}
              data={"19°"}
              uv={""}
              time={""}
              weather={""}
            ></WeatherMicroContainers>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Home;

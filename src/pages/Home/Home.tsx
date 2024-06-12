import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Home.css";
import { Paper, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { yellow } from "@mui/material/colors";
import WeatherWeekBlock from "../../components/WearthWeekBlock";
import WeatherMicroContainers from "../../components/WearthMicroContainers";

const Home = () => {
  return (
    <div className="home-page">
      <Typography variant="h5">Добро пожаловать!</Typography>

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
        <Typography variant="body1" className="values-wearth-name">
          Лучшее время для бега:
        </Typography>
        <Typography variant="h5" className="values-wearth">
          15:00 - 17:00
        </Typography>
        <Typography variant="h6" className="values-wearth">
          24 C, 2 m/s
        </Typography>
      </Paper>

      <Typography
        variant="subtitle1"
        className="wearth-typography-today"
        fontFamily="Roboto"
      >
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
        <div className="wearth-block-status">
          <div className="wearth-city">
            <Typography variant="button"> Sonoma </Typography>
            <Typography variant="h4"> 76° </Typography>
          </div>
          <div className="wearth-status">
            <WbSunnyIcon fontSize="small" sx={{ color: yellow[600] }} />
            <Typography variant="button" fontSize="small">
              Sunny
            </Typography>
            <Typography variant="button"> H:88° L:57°</Typography>
          </div>
        </div>
        <div className="wearth-week">
          <WeatherWeekBlock time={"9AM"} degrees={"77°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"10AM"} degrees={"80°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"11AM"} degrees={"81°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"12AM"} degrees={"81°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"1PM"} degrees={"85°"}></WeatherWeekBlock>
          <WeatherWeekBlock time={"2PM"} degrees={"88°"}></WeatherWeekBlock>
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
                <WeatherMicroContainers type = {"UV INDEX"} data={"4"} uv={"Moderate"} time={""} weather={""}></WeatherMicroContainers>
            </div>
        </Paper>
    </div>
  );
};

export default Home;

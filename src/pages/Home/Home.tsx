import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Home.css";
import { Paper, Typography } from "@mui/material";

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
          {" "}
          Лучшее время для бега:
        </Typography>
        <Typography variant="h5" className="values-wearth">
          {" "}
          15:00 - 17:00{" "}
        </Typography>
        <Typography variant="h6" className="values-wearth">
          {" "}
          24 C, 2 m/s{" "}
        </Typography>
      </Paper>

      <Typography variant="body1" gutterBottom>
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
        <div className="wearth-city">
          <Typography variant="button"> Sonoma </Typography>
          <Typography variant="h4"> 76° </Typography>
        </div>
        <div className="wearth-status">
          <Typography variant="button"> Sunny </Typography>
        </div>
        <div className="wearth-week">
          <div className="wearth-day">
            <Typography variant="button"> 9AM </Typography>
              <Typography variant="button"> 9AM </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Home;

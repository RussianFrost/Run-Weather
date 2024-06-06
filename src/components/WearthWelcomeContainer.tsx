import React from "react";
import "../pages/Home/Home.css";

const WeatherWelcomeContainer = () => {
  return (
    <div className="wearth-block">
      <p className="better-time-text">Лучшее время для бега:</p>
      <p>15:00 - 17:00</p>
      <p>24C, 2 m/s</p>
    </div>
  );
};

export default WeatherWelcomeContainer;

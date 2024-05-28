import React from "react";
import WeatherWelcomeContainer from "./WearthWelcomeContainer";

const Home = () => {
  return (
      <div className="home-page">
        <WeatherWelcomeContainer />
        <p>Погода сегодня</p>
      </div>
  )
};

export default Home;

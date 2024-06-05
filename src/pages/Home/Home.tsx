import React from "react";
import './Home.less'
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer";

const Home = () => {
  return (
      <div className="home-page">
        <h5>Добро пожаловать</h5>
        <WeatherWelcomeContainer />
        <p>Погода сегодня</p>
      </div>
  )
};

export default Home;

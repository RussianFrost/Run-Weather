import React from "react";

const Home = () => {
  return (
      <div className="home-page">
        <div className="welcome-container">
            <h5>Добро пожаловать</h5>
            <div className="wearth-block">
                <p>Лучшее время для бега:</p>
                <p>15:00 - 17:00</p>
                <p>24C, 2 m/s</p>
            </div>
        </div>
          <div className="main-home">
              <p>Погода сегодня</p>
              <div className="wearth-block">
                  <div className="wearth-block-indicator">
                      <div className="wearth-block-indicator-city">
                          <p>Sonoma</p>
                          <p>76°</p>
                      </div>
                      <div className="wearth-block-indicator-city">

                      </div>
                  </div>
                  <div className="wearth-indicator-week">

                  </div>
              </div>
              <div className="weather-micro-container">
                  <div className="weather-micro-block">
                    <div className="wether-micro-name">

                    </div>
                  </div>
                  <div className="weather-micro-block">
                      <div className="wether-micro-name">

                      </div>
                  </div>
                  <div className="weather-micro-block">
                      <div className="wether-micro-name">

                      </div>
                  </div>
                  <div className="weather-micro-block">

                  </div>
              </div>
          </div>
      </div>
  )
};

export default Home;

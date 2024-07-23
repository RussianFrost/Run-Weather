import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherWelcomeContainer from "../../components/WearthWelcomeContainer/WeatherWelcomeContainer";
import WeatherMainComponent from "../../components/WeatherMainComponent/WeatherMainComponent";
import WeatherMicroContainer from "../../components/WeatherMicroContainer/WeatherMicroContainer";
import WeatherScheduleDay from "../../components/WeatherScheduleDay/WeatherScheduleDay";
import WeatherWeekBlock from "../../components/WeatherWeekBlock/WeatherWeekBlock";
import { WeatherData } from "../../services/models/weather-data";
import { useWeathersApi } from "../../services/useWeathersApi";
import "./Home.css";
import WeatherDataBlock from "../../components/WeatherDataBlock/WeatherDataBlock";

const Home = () => {
  const [todayWeatherData, setTodayWeatherData] = useState<WeatherData | null>(
    null,
  );

  useEffect(() => {
    getTodayWeather();
  }, []);

  function getTodayWeather() {
    useWeathersApi
      .getDayWeather()
      .then((weather) => {
        setTodayWeatherData(weather?.data || null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="home-page">
        <WeatherMainComponent 
    windData={todayWeatherData?.current.wind_kph.toString() || ""} 
    temperatureData={todayWeatherData?.current.temp_c.toString() || ""} 
    humidityData={todayWeatherData?.current.humidity.toString() || ""}
    cityName={todayWeatherData?.location.name.toString() || ""}  
/>

        <WeatherScheduleDay></WeatherScheduleDay>
      <h2 className="welcome-name">
        Добро пожаловать!
      </h2>
      <WeatherWelcomeContainer
        time={"15:00 - 17:00"}
        data={"24 С, 2 m/s"}
        title={"Лучшее время бега:"}
      ></WeatherWelcomeContainer>
      <h3 className="weather-typography-today">
        Погода сегодня:
      </h3>
      <div className="wearth-today-block">
        <WeatherWeekBlock
          city={todayWeatherData?.location.name || ""}
          weatherCurrentDegree={todayWeatherData?.current.temp_c || ""}
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
          data={todayWeatherData?.current.uv || ""}
          description={"Moderate"}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"SUNRISE"}
          data={todayWeatherData?.forecast.forecastday[0].astro.sunrise || ""}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"WIND"}
          data={todayWeatherData?.current.wind_kph + " km/h"}
        ></WeatherMicroContainer>
        <WeatherMicroContainer
          title={"FEELS LIKE"}
          data={todayWeatherData?.current.feelslike_c + "\u00B0"}
        ></WeatherMicroContainer>
      </div>
    </div>
  );
};
   
export default Home;
 
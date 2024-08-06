import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherHeaderComponent from "../../components/WeatherHeaderComponent/WeatherHeaderComponent";
import WeatherChartComponent from "../../components/WeatherChartComponent/WeatherChartComponent";
import { BestHour, WeatherData, chartDataType } from "../../services/models/weather-data";
import { useWeathersApi } from "../../services/useWeatherApi";
import "./Home.css";

const Home = () => {
  const [todayWeatherData, setTodayWeatherData] = useState<WeatherData | null>(
    null,
  );
  const [bestHour, setBestHour] = useState<BestHour | null>(null);
  const [chartData, setChartData] = useState<chartDataType>({ labels: [], data: [] });

  useEffect(() => {
    getTodayWeather();
  },[]);

  function getTodayWeather(): void {
    useWeathersApi
      .getDayWeather()
      .then((weather) => {
        const data = weather?.data || null;
        setTodayWeatherData(data);

        if (data) {
          const bestTime = bestWeather(data);
          setBestHour(bestTime);

          const hours = data.forecast.forecastday[0].hour;
          const labels = hours.map((hour) => hour.time.split(" ")[1]);
          const temperatures = hours.map((hour) => Number(hour.temp_c));

          setChartData({ labels, data: temperatures });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function bestWeather(data: WeatherData) {
    const hours = data.forecast.forecastday[0].hour;
    let bestTime = hours[0];

    for (const hour of hours) {
      if (
        Number(hour.temp_c) > Number(bestTime.temp_c) &&
        Number(hour.wind_mph) < Number(bestTime.wind_mph) &&
        Number(hour.humidity) < Number(bestTime.humidity)
      ) {
        bestTime = hour;
      }
    }

    const startHour = bestTime.time.split(" ")[1];
    const startDate = new Date(`${bestTime.time.split(" ")[0]}T${startHour}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

    const endHour = endDate.toTimeString().split(" ")[0].slice(0, 5);

    return {
      startTime: startHour,
      endTime: endHour,
      temperature: bestTime.temp_c.toString(),
      windSpeed: bestTime.wind_mph.toString(),
      humidity: bestTime.humidity.toString(),
    };
  }

  function getWindSpeed(): string {
    return todayWeatherData?.current?.wind_mph?.toString() || "";
  }

  function getTemperature(): string {
    return todayWeatherData?.current?.temp_c?.toString() || "";
  }

  function getHumidity(): string {
    return todayWeatherData?.current?.humidity?.toString() || "";
  }

  function getCityName(): string {
    return todayWeatherData?.location?.name?.toString() || "";
  }

  return (
    <div className="home-page">
      <WeatherHeaderComponent
        startHour={bestHour?.startTime || ""}
        endHour={bestHour?.endTime || ""}
        windSpeed={bestHour?.windSpeed || getWindSpeed()}
        temperature={bestHour?.temperature || getTemperature()}
        humidity={bestHour?.humidity || getHumidity()}
        cityName={getCityName()}
      />
      <WeatherChartComponent
        chartTitle={"График погоды:"}
        labels={chartData.labels}
        data={chartData.data}
      ></WeatherChartComponent>
    </div>
  );
};

export default Home;

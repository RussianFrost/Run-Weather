import "@fontsource/inter/";
import React, { useEffect, useState } from "react";
import WeatherHeaderComponent from "../../components/WeatherHeaderComponent/WeatherHeaderComponent";
import WeatherChartComponent from "../../components/WeatherChartComponent/WeatherChartComponent";
import { BestHour, WeatherData } from "../../services/models/weather-data";
import { useWeathersApi } from "../../services/useWeatherApi";
import "./Home.css";
import { chartDataType } from "../../services/models/chart-data";

const Home = () => {
  const [todayWeatherData, setTodayWeatherData] = useState<WeatherData | null>(
    null,
  );
  const [bestHour, setBestHour] = useState<BestHour | null>(null);
  const [chartData, setChartData] = useState<chartDataType>({
    labels: [],
    data: [],
  });

  useEffect(() => {
    getTodayWeather();
  }, []);

  function getTodayWeather(): void {
    useWeathersApi
      .getDayWeather()
      .then((weather) => {
        const data = weather?.data || null;
        setTodayWeatherData(data);

        if (data) {
          const bestTime = calculateBestWeather(data);
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

  function calculateBestWeather(data: WeatherData) {
    const hours = data.forecast.forecastday[0].hour;

    const idealWeatherData = {
      temperature: { min: 10, max: 25, weight: 2 }, // Идеальная температура
      wind: { max: 5, weight: -1 }, // Максимальная скорость ветра
      humidity: { min: 40, max: 60, weight: -1 }, // Идеальная влажность
    };

    let bestTime = hours[0];
    let bestScore = -Infinity;

    for (const hour of hours) {
      const temp = Number(hour.temp_c);
      const wind = Number(hour.wind_mph);
      const humidity = Number(hour.humidity);

      let score = 0;

      if (
        temp >= idealWeatherData.temperature.min &&
        temp <= idealWeatherData.temperature.max
      ) {
        score +=
          idealWeatherData.temperature.weight *
          (idealWeatherData.temperature.max - temp);
      } else {
        score +=
          idealWeatherData.temperature.weight *
          (idealWeatherData.temperature.max - idealWeatherData.temperature.min);
      }

      if (wind <= idealWeatherData.wind.max) {
        score += idealWeatherData.wind.weight * wind;
      }

      if (
        humidity >= idealWeatherData.humidity.min &&
        humidity <= idealWeatherData.humidity.max
      ) {
        score +=
          idealWeatherData.humidity.weight *
          (idealWeatherData.humidity.max - humidity);
      }

      if (score > bestScore) {
        bestTime = hour;
        bestScore = score;
      }
    }

    const startHour = bestTime.time.split(" ")[1];
    const startDate = new Date(`${bestTime.time.split(" ")[0]}T${startHour}`);
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);
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

  function getHour(): string {
    return (
      todayWeatherData?.location.localtime?.split(" ")[1].slice(0, 5) || ""
    );
  }

  return (
    <div className="home-page">
      <WeatherHeaderComponent
        startHour={bestHour?.startTime || getHour()}
        endHour={bestHour?.endTime || getHour()}
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

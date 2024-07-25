import React, { useEffect, useRef } from "react";
import {setupWeatherChart} from "../../utils/weatherChart";

const WeatherChartDay = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const initChart = () => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const myChart = setupWeatherChart(ctx); // Вызываем функцию для настройки графика

    return () => {
      myChart.destroy();
    };
  };

  useEffect(() => {
    const cleanup = initChart(); // Вызов функции и сохранение функции очистки
    return cleanup;
  }, []);

  return (
      <div className="weather-schedule">
        <b className="weather-schedule-title">График погоды:</b>
        <canvas ref={chartRef} className={"weather-scheduler-data"}></canvas>
      </div>
  );
};

export default WeatherChartDay;

import React, { useEffect, useRef } from "react";
import {setupWeatherChart} from "../../utils/weatherChart";

type WeatherChartData = {
  chartTitle: string,
}

const WeatherChartComponent: React.FC<WeatherChartData> = ({chartTitle}) => {
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
    return initChart();
  }, []);

  return (
      <div className="weather-schedule">
        <b className="weather-schedule-title">{chartTitle}</b>
        <canvas ref={chartRef} className={"weather-scheduler-data"}></canvas>
      </div>
  );
};

export default WeatherChartComponent;

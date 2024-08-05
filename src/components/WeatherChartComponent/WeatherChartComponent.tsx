import React, { useEffect, useRef } from "react";
import { setupWeatherChart } from "../../utils/weatherChart";
import { Chart } from "chart.js";

type WeatherChartData = {
  chartTitle: string,
  labels: string[],
  data: number[]
}

const WeatherChartComponent: React.FC<WeatherChartData> = ({ chartTitle, labels, data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null); // Ссылка на экземпляр графика

  // Ограничение данных до 8 часов
  const limitedData = data.slice(-8); // Получаем последние 8 данных
  const limitedLabels = labels.slice(-8); // Получаем последние 8 меток

  const initChart = () => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Уничтожаем предыдущий график, если он существует
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    chartInstance.current = setupWeatherChart(ctx, limitedLabels, limitedData); // Передаем ограничения меток и данных графика
  };

  useEffect(() => {
    initChart();
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Уничтожаем график при размонтировании компонента
      }
    };
  }, [limitedLabels, limitedData]); // Запускаем повторную инициализацию при изменении ограниченных данных

  return (
      <div className="weather-schedule">
        <b className="weather-schedule-title">{chartTitle}</b>
        <canvas ref={chartRef} className={"weather-scheduler-data"}></canvas>
      </div>
  );
};

export default WeatherChartComponent;


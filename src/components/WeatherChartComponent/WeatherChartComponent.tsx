import { Chart, registerables } from "chart.js";
import React, { useEffect, useRef } from "react";
import { setupWeatherChart } from "../../utils/weatherChart";

Chart.register(...registerables);

type WeatherChartData = {
  chartTitle: string;
  labels: string[];
  data: number[];
};

const WeatherChartComponent: React.FC<WeatherChartData> = ({
  chartTitle,
  labels,
  data,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  // Ограничение данных до 8 часов
  const getLimitedData = () => {
    return data.slice(-24);
  };
  const getLimitedLabels = () => {
    return labels.slice(-24);
  };

  const initChart = () => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Уничтожаем предыдущий график, если он существует
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Создаем новый график
    chartInstance.current = setupWeatherChart(
      ctx,
      getLimitedLabels(),
      getLimitedData(),
    );
  };

  // Обновление графика
  const updateChart = () => {
    if (chartInstance.current) {
      chartInstance.current.data.labels = getLimitedLabels();
      chartInstance.current.data.datasets[0].data = getLimitedData();
      chartInstance.current.update(); // Обновляем график без пересоздания
    }
  };

  useEffect(() => {
    initChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Уничтожаем график при размонтировании компонента
      }
    };
  }, []); // Запуск только при первом рендере

  // Используем отдельный useEffect для обновления графика при изменении данных
  useEffect(() => {
    updateChart(); // Обновляем график только при изменении данных
  }, [labels, data]); // Срабатывает только при изменении labels или data

  return (
    <div className="weather-schedule">
      <b className="weather-schedule-title">{chartTitle}</b>
      <canvas ref={chartRef} className={"weather-scheduler-data"}></canvas>
    </div>
  );
};

export default WeatherChartComponent;

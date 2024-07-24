import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const WeatherChartDay = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;
    ctx.scale(5, 5); //увелечение расширения графика

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
        datasets: [
          {
            label: ``,
            data: [23, 35, 30, 23, 40, 23, 35, 30, 23, 40],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 3,
            pointBorderWidth: 4,
          }
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false // Отключаем всю легенду
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="weather-schedule">
      <b className="weather-schedule-title">График погоды:</b>
      <canvas ref={chartRef} className={"weather-scheduler-data"}></canvas>
    </div>
  );
};

export default WeatherChartDay;

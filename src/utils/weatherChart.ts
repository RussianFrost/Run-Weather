import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

export const setupWeatherChart = (ctx: CanvasRenderingContext2D): Chart => {
  ctx.scale(5, 5); // увеличение расширения графика

  const chartConfig: ChartConfiguration = {
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
  };

  return new Chart(ctx, chartConfig);
};



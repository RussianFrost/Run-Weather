import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

export const setupWeatherChart = (
  ctx: CanvasRenderingContext2D,
  labels: string[],
  data: number[],
): Chart => {
  ctx.scale(5, 5); // Увеличение расширения графика

  const chartConfig: ChartConfiguration = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Температура (°C)',
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 4,
          pointBorderWidth: 4,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: false, // Отключаем всю легенду
        },
      },
    },
  };

  return new Chart(ctx, chartConfig);
};

import { Chart } from "chart.js";

export const setupWeatherChart = (ctx: CanvasRenderingContext2D) => {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
      datasets: [
        {
          label: "",
          data: [23, 35, 30, 23, 40, 23, 35, 30, 23, 40],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          pointBorderWidth: 4,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};

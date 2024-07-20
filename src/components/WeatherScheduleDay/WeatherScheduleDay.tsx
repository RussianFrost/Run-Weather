import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const WeatherScheduleDay = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;
        ctx.scale(5, 5); //увелечение расширения графика (это пиздец)

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Январь', 'Февраль', 'Март'],
                datasets: [{
                    label: 'Пример данных',
                    data: [12, 19, 3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3,
                    pointBorderWidth: 4
                }]
            },
            options: {
                responsive: false,
            }
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef} className={"weather-scheduler"}></canvas>;
};

export default WeatherScheduleDay;



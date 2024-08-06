export type WeatherData = {
  location: {
    name: string;
  };
  current: {
    temp_c: string;
    uv: string;
    wind_mph: number;
    feelslike_c: number;
    humidity: number;
  };
  forecast: {
    forecastday: Array<{
      astro: {
        sunrise: string;
      };
      hour: Array<{
        time: string;
        temp_c: string;
        wind_mph: number;
        humidity: number;
      }>;
    }>;
  };
};

export type BestHour = {
  startTime: string; // Время начала
  endTime: string; // Время окончания
  temperature: string; // Температура
  windSpeed: string; // Скорость ветра
  humidity: string; // Влажность
};
export type chartDataType = {
  labels: string[];
  data: number[];
}

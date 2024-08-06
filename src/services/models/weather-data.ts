export type WeatherData = {
  location: {
    name: string;
    localtime: string;
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
  startTime: string;
  endTime: string;
  temperature: string;
  windSpeed: string;
  humidity: string;
};

export type chartDataType = {
  labels: string[];
  data: number[];
}

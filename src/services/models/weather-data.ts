export type WeatherData = {
  location: {
    name: string;
  };
  current: {
    temp_c: string;
    uv: string;
    wind_kph: number;
    feelslike_c: number;
    humidity: number;
  };
  forecast: {
    forecastday: {
      astro: {
        sunrise: string;
      };
    }[];
  };
};

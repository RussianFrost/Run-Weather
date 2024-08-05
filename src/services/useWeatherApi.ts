import axios, { AxiosResponse } from "axios";
import { BackUrls } from "./backendApi/backUrls";
import { WeatherData } from "./models/weather-data";

export class useWeathersApi {
  static async getCityByGeolocation(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve(`${latitude},${longitude}`);
          },
          (error) => {
            console.error("Ошибка получения местоположения", error);
            reject(null);
          },
        );
      } else {
        console.error("Геолокация не поддерживается этим браузером.");
        reject(null);
      }
    });
  }

  static async getDayWeather(): Promise<AxiosResponse<
    WeatherData,
    any
  > | null> {
    const location = await this.getCityByGeolocation();
    if (!location) return null;

    return axios
      .get(
        `${BackUrls.WeatherApi}/forecast.json?q=${location}&days=1&key=${process.env.REACT_APP_WEATHER_API_KEY}`,
      )
      .catch((error) => {
        console.error("Ошибка при получении погоды", error);
        return null;
      });
  }
}

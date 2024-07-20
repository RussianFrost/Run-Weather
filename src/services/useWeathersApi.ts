import axios, { AxiosResponse } from "axios";
import { BackUrls } from "./backendApi/backUrls";
import { WeatherData } from "./models/weather-data";

export class useWeathersApi {
  static async getCityByIp() {
    return fetch(BackUrls.CityApi)
      .then((response) => response.json())
      .then((data) => {
        return data.city;
      })
      .catch((error) => {
        console.error("Ошибка при получении города", error);
        return null;
      });
  }

  static async getDayWeather(): Promise<AxiosResponse<WeatherData, any> | null> {
    const city = await this.getCityByIp();
    return axios
      .get(
        `${BackUrls.WeatherApi}/forecast.json?q=${city}&days=1&key=${process.env.REACT_APP_WEATHER_API_KEY}`,
      )
      .catch((error) => {
        console.error("Ошибка при получении погоды", error);
        return null;
      });
  }
}

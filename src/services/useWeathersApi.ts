import axios, { AxiosResponse } from "axios";
import { BackUrls } from "./backendApi/backUrls";
import { KeyStorage } from "../utils/keys";

export class useWeathersApi {
  static async getCityByIp() {
    return fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        return data.city;
      })
      .catch((error) => {
        console.error("Ошибка при получении города", error);
        return null;
      });
  }

  static async getDayWeather(): Promise<AxiosResponse<any, any> | null> {
    const city = await this.getCityByIp();
    return axios
      .get(
        `${BackUrls.Prod}/forecast.json?q=${city}&days=1&key=${KeyStorage.WEATHER_API_KEY}`,
      )
      .catch((error) => {
        console.error("Ошибка при получении погоды", error);
        return null;
      });
  }
}
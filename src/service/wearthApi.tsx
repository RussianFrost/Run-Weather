import axios from "axios";
import { BackUrls } from "./backUrls";

export class WeatherApi {
    getDayWeather(){
        return axios.get(`${BackUrls.Prod}/forecast.json?q=Omsk&days=1&key=`)
    }
}
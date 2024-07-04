import axios from "axios";
import {BackUrls} from "./backendApi/backUrls";
import {KeyStorage} from "../utils/keys";

export class useWeathersApi {
    static getDayWeather(){
        return axios.get(`${BackUrls.Prod}/forecast.json?q=Omsk&days=1&key=${KeyStorage.WEATHER_API_KEY}`)
    }
}

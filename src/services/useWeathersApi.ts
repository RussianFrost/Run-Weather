import axios from "axios";
import {BackUrls} from "./backendApi/backUrls";
import {KeyStorage} from "../utils/keys";
import { useEffect, useState } from "react";

export class useWeathersApi {
    static geoPosition(){
        return useEffect(() => {
            const [city, setCity] = useState('');
            if ('geolocation' in navigator) {
              navigator.geolocation.getCurrentPosition((position) => {
                fetch(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`)
                  .then(response => response.json())
                  .then(data => {
                    const city = data.city;
                    setCity(city);
                    console.log(city);
                  })
                  .catch(error => {
                    console.error('Ошибка при получении данных', error);
                  });
              });
            } else {
              console.log('Geolocation не поддерживается вашим браузером');
            }
          }, []);
    }
    static getDayWeather(){
        return axios.get(`${BackUrls.Prod}/forecast.json?q=${this.geoPosition}&days=1&key=${KeyStorage.WEATHER_API_KEY}`)
    }
}

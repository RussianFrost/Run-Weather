import axios from "axios";
import { useState, useEffect } from "react";

export const useWeatherApi = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        axios.get("https://api.weatherapi.com/v1/forecast.json?q=Omsk&days=1&key=")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return data;
};

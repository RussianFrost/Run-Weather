import axios from "axios";
import {BackUrls} from "./backUrls";
import { useState, useEffect } from "react";

export const useWeatherApi = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        axios.get(`${BackUrls.Prod}/forecast.json?q=Omsk&days=1&key=`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return data;
};

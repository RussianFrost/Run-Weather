import React from "react";
import "./WeatherDataBlock.css";
import "@fontsource/inter/100.css";

type WeatherDataBlockType = {
    // title: string;
    // data: string;
    // description?: string;
};


const WeatherDataBlock: React.FC<WeatherDataBlockType> = (weatherMicro) => {
    return (
            <div className="weather-data">
                <div className="weather-data-block">
                    <p className="weather-data-name">Ветер</p>
                    <b className="weather-data-number">3</b>
                    <p className="weather-data-sub">м/с</p>
                </div>
                <div className="weather-data-block">
                    <p className="weather-data-name">Температура</p>
                    <b className="weather-data-number">23</b>
                    <p className="weather-data-sub">°C</p>
                </div>
                <div className="weather-data-block">
                    <p className="weather-data-name">Влажность</p>
                    <b className="weather-data-number">70</b>
                    <p className="weather-data-sub">%</p>
                </div>
            </div>
    );
};

export default WeatherDataBlock;
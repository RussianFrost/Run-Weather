import React from "react";
import "../WeatherMicroContainer/WeatherMicroContainer.css";

type WeatherMicroBlocks = {
  title: string;
  data: string;
  description?: string;
};

const WeatherMicroContainer: React.FC<WeatherMicroBlocks> = (weatherMicro) => {
  return (
    <div className="micro-blocks">
      <p className="micro-name">{weatherMicro.title}</p>
      <h1 className="micro-data">{weatherMicro.data}</h1>
      <h2 className="micro-data">{weatherMicro.description}</h2>
    </div>
  );
};

export default WeatherMicroContainer;

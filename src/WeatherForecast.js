import React, { useState } from "react";
import axios from "axios";

import ShowWeatherForecast from "./ShowWeatherForecast";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function getForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
        
        <div className="WeatherForecast row">
        <ShowWeatherForecast data={forecast.list[0]} />
        <ShowWeatherForecast data={forecast.list[1]} />
        <ShowWeatherForecast data={forecast.list[2]} />
        <ShowWeatherForecast data={forecast.list[3]} />
        <ShowWeatherForecast data={forecast.list[4]} />
        <ShowWeatherForecast data={forecast.list[5]} />
      </div>
        );
    } else {
        let apiKey = "21bc8603ffd9249d88b5d175d531dd75";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(getForecastResponse);

        return null;
    }
}
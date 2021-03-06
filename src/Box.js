import React, { useState } from "react";
import axios from "axios";
import "./Box.css";
import WeatherInfo from "./WeatherInfo";
import Spinner from 'react-bootstrap/Spinner';
import WeatherForecast from "./WeatherForecast";


export default function Box(props) {
    const [weatherInfo, setWeatherInfo] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function getResponse(response){
        console.log(response.data);

        setWeatherInfo({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

    function getSearch(event){
        event.preventDefault();
        search();
    }

    function updateSearch(event) {
        setCity(event.target.value);
    }

    function search(){
        let units = "metric";
        let apiKey = "de8a977142744faddd6c8277b005e3ef";
        let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
        let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`; 

        axios.get(apiUrl).then(getResponse); 
    }

    if (weatherInfo.ready) {
       return (
    <div className="box">
        <div className="container">
            
            <h1>
                Hello!
            </h1>
            
            <form onSubmit={getSearch}>           
                    <input type="text" id="city-input" className="form-control" placeholder="Enter city" onChange={updateSearch} />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Search" />                              
            </form>

            <WeatherInfo data={weatherInfo}/>
                              
            <WeatherForecast city={weatherInfo.city} />
        </div>         
    </div>                 
  ); 
    } else {
        search();
        return (
            <div>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

}
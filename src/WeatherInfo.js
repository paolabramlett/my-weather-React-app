import React from "react";
import WeatherTemp from "./WeatherTemp";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
    return (
        <div>
            <h2 id="city">{props.data.city}</h2>


            <div className="row">
                <div className="col-md">
                    <div className="clearfix">
                        <span className="temperature float-left" id="temp">
                             <WeatherTemp celsius={props.data.temperature} />
                        </span>
                        <a className="cel float-left" id="cel" href="/">
                            ºC | 
                        </a>
                        <a className="far float-left" id="far" href="/">
                            ºF
                        </a>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="row" id="description-elements">
                        <div className="col-md">
                            <ul>
                                <li className="text-capitalize"><strong>{props.data.description}</strong></li>
                                <li>
                                    <FormatDate date={props.data.date} />
                                </li>
                                <br />                              
                                <li><strong>Humidity:</strong> <span>{props.data.humidity}%</span></li>
                                <li><strong>Wind:</strong> <span>{props.data.wind}km/h</span> </li>
                            </ul>
                     
                            <img
                            src={WeatherInfo.icon}
                            alt="weathericon"
                            id="emoji1"
                            className="float-left"
                            />    
                        </div>
                    </div>
                </div>    
                   
                <div className="row weather-forecast" id="forecast"></div>
        </div>
    )
}
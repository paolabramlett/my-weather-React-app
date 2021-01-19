import React from "react";
import WeatherTemp from "./WeatherTemp";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

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
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="row" id="description-elements">
                        <div className="col-6">
                            <ul>
                                <li className="text-capitalize"><strong>{props.data.description}</strong></li>
                                <li>
                                    <FormatDate date={props.data.date} />
                                </li>
                                <br />                              
                                <li><strong>Humidity:</strong> <span>{props.data.humidity}%</span></li>
                                <li><strong>Wind:</strong> <span>{props.data.wind.speed}km/h</span> </li>
                            </ul>
                        <div className="col-6">
                            <div className="clearfix">
                            <div className="float-left">
                                <WeatherIcon code={props.data.icon} />
                            </div>  
                        </div>
                        </div>
                        </div>
                    </div>
                </div>    
                   
                <div className="row weather-forecast" id="forecast"></div>
        </div>
    )
}
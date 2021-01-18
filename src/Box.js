import React from "react";
import "./Box.css";


export default function Box() {
  return (
    <div className="box">
        <div className="container">
            
            <h1>
                Hello!
            </h1>
            
            <form id="search-city-form">           
                    <input type="text" id="city-input" className="form-control" placeholder="Enter city" />
                    <input type="submit" className="btn btn-primary" value="Search"/>            
            </form>


            <h2 id="city"></h2>


            <div className="row">
                <div className="col-md">
                    <div className="clearfix">
                        <span className="temperature float-left" id="temp">
                            27
                        </span>
                        <a className="cel float-left" id="cel" href="#">
                            ºC | 
                        </a>
                        <a className="far float-left" id="far" href="#">
                            ºF
                        </a>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="row" id="description-elements">
                        <div className="col-md">
                            <ul>
                                <li id="description">SUNNY</li>
                                <li id="date">
                                    Time goes here
                                </li>
                                <br />
                                <li><strong>Feels like:</strong> <span id="feels">7%</span></li>
                                <li><strong>Humidity:</strong> <span id="humidity">76%</span></li>
                                <li><strong>Wind:</strong> <span id="wind">5km/h</span> </li>
                            </ul>
                     
                            <img
                            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                            alt="weathericon"
                            id="emoji1"
                            className="float-left"
                            />    
                        </div>
                    </div>
                </div>    
                   
                <div className="row weather-forecast" id="forecast"></div>
        </div>
    

            <br />
            <footer className="github-link">
                <a href="https://github.com/paolabramlett/Paola-bramlett-final-project" target="_blank">
                    Open-source code</a> by Paola Vasquez-Bramlett
            </footer> 
    </div>                 
  );
}
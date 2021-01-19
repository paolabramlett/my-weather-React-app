import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");

    function showFar(event) {
        event.preventDefault();
        setUnit ("far");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function far() {
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
        return (
            <div className="row">
                <div className="col-md">
                    <div className="clearfix">
                        <span className="temperature float-left">
                             {Math.round(props.celsius)}
                        </span>
                        <a className="cel float-left" id="cel" href="/">
                            ºC | 
                        </a>
                        <a className="far float-left" href="/" onClick={showFar}>
                            ºF
                        </a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
        <div className="row">
                <div className="col-md">
                    <div className="clearfix">
                        <span className="temperature float-left">
                             {Math.round(far())}
                        </span>
                        <span className="unit">
                        <a className="cel float-left" href="/" onClick={showCelsius}>
                            ºC | 
                        </a>
                        <a className="far float-left" id="far" href="/">
                            ºF
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        );    
    }
}
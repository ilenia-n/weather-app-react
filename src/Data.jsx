import React from "react";
import Time from "./Time"

function Data(props) {
    return (
        <div className="Data">
            <div className="row">
                <div className="col-6">

                    <ul>
                        <li><h1 className="text-capitalize">{props.results.city}</h1></li>
                        <li>Last updated: <Time /></li>
                        <li>{props.results.description}</li>
                    </ul>
                    <img src="https://duckduckgo.com/assets/weather/icons/partly-cloudy-day.svg" alt="Cloudy" />
                </div>
                <div className="col-6">

                    <ul className="second-list">
                        <li className="temp-heading">{props.results.temp}<span className="unit">°C</span></li>
                        <li>Feels like: {props.results.feel}°</li>
                        <li>Humidity: {props.results.humidity}%</li>
                        <li>Wind: {props.results.wind} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Data;
import React from "react";
import "./Weather.css";
// import axios from "axios";

function Weather(props){
    return (
        <div className="Weather"> 
            <div className="container box">
            <div className="row p-4">
            <div className="col-11">
                <form>
                    <div className="input-group mb-3">
                        <input type="text"  id ="cityInput" className="form-control" autoFocus placeholder="Enter a city..." />
                        <input className="submit" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                
                <ul>
                    <li><h1 className="text-capitalize">{props.defaultcity}</h1></li>
                    <li>Last updated:</li>
                    <li id="weatherDescription">Cloudy</li>
                </ul>
                <img src="https://duckduckgo.com/assets/weather/icons/partly-cloudy-day.svg" alt="Cloudy" />
            </div>
            <div className="col-6">
                
                <ul>
                    <li className="temp-heading">20<span className="unit">°C</span></li>
                    <li>Feels like: 19°</li>
                    <li>Humidity: 73%</li>
                    <li>Wind: 10 mph</li>
                </ul>
            </div>
        </div>
                
            </div>
        </div>
    )
}

export default Weather;
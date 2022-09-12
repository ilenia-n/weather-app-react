import React from "react";
import "./Weather.css";
// import axios from "axios";

function Weather(props){
    return (
        <div className="Weather"> 
            <div className="container box">
            <div className="row">
            <div className="col-8">
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
                <h2 className="text-capitalize">{props.defaultcity}</h2>
                <ul>
                    <li>Last updated:</li>
                    <li id="weatherDescription">Cloudy</li>
                </ul>
                <img src="https://duckduckgo.com/assets/weather/icons/partly-cloudy-day.svg" alt="Cloudy" />
            </div>
            <div className="col-6">
                <h1 className="mb-5">20<span className="unit">°C</span></h1>
                <ul>
                    <li>Feels like: <span id="feelsLike">19</span>°</li>
                    <li>Humidity: <span id="humidity">73</span></li>
                    <li>Wind: <span id="windSpeed">10</span> mph</li>
                </ul>
            </div>
        </div>
                
            </div>
        </div>
    )
}

export default Weather;
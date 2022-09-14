import React, { useState } from "react";
import "./Weather.css";
import Time from "./Time"
import axios from "axios";


function Weather() {
    const [weatherData, setWeatherData] = useState({});

    function showDataResults(response) {
        setWeatherData({
            load: true,
            description: response.data.weather[0].description,
            temp: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.spee),
            feel: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity
        });
        }
        


if (weatherData.load){
    console.log(weatherData.time)
return (
    <div className="Weather">
        <div className="container box">
            <div className="row p-4">
                <div className="col-11">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" id="cityInput" className="form-control" autoFocus placeholder="Enter a city..." />
                            <input className="submit" type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-6">

                    <ul>
                        <li><h1 className="text-capitalize">London</h1></li>
                        <li>Last updated: <Time /></li>
                        <li>{weatherData.description}</li>
                    </ul>
                    <img src="https://duckduckgo.com/assets/weather/icons/partly-cloudy-day.svg" alt="Cloudy" />
                </div>
                <div className="col-6">

                    <ul>
                        <li className="temp-heading">{weatherData.temp}<span className="unit">°C</span></li>
                        <li>Feels like: {weatherData.feel}°</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} mph</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
        )
    } else {
        let city = "london";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc51080b02acff683dbe8e4cbf69dccc&units=metric`;
        axios(apiUrl).then(showDataResults);
        return "loading"
    }
}

export default Weather;
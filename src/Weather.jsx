import React, { useState } from "react";
import "./Weather.css";
import Data from "./Data";
import axios from "axios";


function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("london");

    function showDataResults(response) {
        
        setWeatherData({
            load: true,
            description: response.data.weather[0].description,
            temp: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            feel: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            city: response.data.name,
            icon: response.data.weather[0].icon
        });
        }

  



    function citySearch(event) {
        event.preventDefault();
        perfomResult();
    }

    function cityEnter(event) {
        setCity(event.target.value);
    }

    function perfomResult() {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc51080b02acff683dbe8e4cbf69dccc&units=metric&exclude=hourly,daily`;
        axios(apiUrl).then(showDataResults);
    }


    if (weatherData.load) {
        return (
            <div className="Weather">
                <div className="container box">
                    <div className="row p-4">
                        <div className="col-11">
                            <form onSubmit={citySearch}>
                                <div className="input-group mb-3">
                                    <input type="text" id="cityInput" className="form-control" autoFocus="on" onChange={cityEnter} placeholder="Enter a city..." value={city}/>
                                    <input className="submit" type="submit" value="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <Data results={weatherData} />
                    
                </div>
            </div>
        )
    } else {
        perfomResult();
        return "Loading..."

    }
}

export default Weather;
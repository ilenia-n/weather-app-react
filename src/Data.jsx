import React from "react";
import Time from "./Time";



function Data(props) {

  let icon = [props.results.icon];
  let imgIcon = require(`./assets/${icon}.png`)

  function getCelsius() {
    let celsius = Math.round(props.results.temp);
    return celsius;
  }

  return (
    <div className="Data">
      <div className="row">
        <div className="col-6">

          <ul>
            <li><h1 className="text-capitalize">{props.results.city}</h1></li>
            <li>Last updated: <Time /></li>
            <li>{props.results.description}</li>
          </ul>
          <img src={imgIcon} alt={props.results.description} />
        </div>
        <div className="col-6">

          <ul className="second-list">
            <li className="temp-heading">{getCelsius()}<span className="unitTemp">°C</span></li>
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
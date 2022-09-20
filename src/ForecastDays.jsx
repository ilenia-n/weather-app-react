import React from "react"

function ForecastDays(props) {

  function returnDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[day];
  }

  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }

  return (
    <div className="col">
      <div className="card">
        <div className="days-forecast">{returnDay()}</div>
        <img className="week-image"
          src={require(`./assets/${props.icon}.png`)}
          alt=""
        />
        <span className="days-forecast">{maxTemp()}°</span>
        <div className="min">{minTemp()}°
        </div>
      </div>
    </div>
  )
}

export default ForecastDays;
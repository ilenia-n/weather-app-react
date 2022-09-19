import React from "react";
import "./Forecast.css"

function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="days-forecast">Sat</div>
            <img className="week-image"
              src={require(`./assets/03d.png`
              )}
              alt=""
            />
            <span className="days-forecast"> 22° </span>
            <div className="min"> 16°
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecast;
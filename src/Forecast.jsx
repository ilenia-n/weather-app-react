import React from "react";
import "./Forecast.css"
import axios from "axios";


function Forecast(props) {

  function performResults(response) {
    console.log(response.data)
  }

  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiURl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=dc51080b02acff683dbe8e4cbf69dccc&units=metric`;

  axios(apiURl).then(performResults);

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
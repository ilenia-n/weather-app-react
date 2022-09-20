import React, { useState } from "react";
import "./Forecast.css"
import ForecastDays  from "./ForecastDays";
import axios from "axios";



function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] =useState(null);

  function performResults(response) {
    console.log(response.data)

    setLoaded(true);
    setData(response.data.daily);
  }

  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiURl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=dc51080b02acff683dbe8e4cbf69dccc&units=metric`;


  if (loaded) {
    return ( 
      <div className="Forecast">
        <div className="row">
            <ForecastDays data={data[0]} icon={data[0].weather[0].icon} />
            <ForecastDays data={data[1]} icon={data[1].weather[0].icon} />
            <ForecastDays data={data[2]} icon={data[2].weather[0].icon} />
            <ForecastDays data={data[3]} icon={data[3].weather[0].icon} />
            <ForecastDays data={data[4]} icon={data[4].weather[0].icon} />
        </div>
      </div>
    )
  } else {
    axios(apiURl).then(performResults);
  }


}

export default Forecast;
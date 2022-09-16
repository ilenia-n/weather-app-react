import React, {useState} from "react";


function Unit(props) {

  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit() {
    let fahrenheit = Math.round(props.temp * 1.8000 + 32.00);
    return fahrenheit
  }



  function handleFahrenheit(event){
  event.preventDefault()
  setUnit("fahrenheit")
  }

  function handleCelsius (event){
    event.preventDefault()
    setUnit("celsius")
    }

  return (

  
    unit === ("celsius") ?

      (<div>
        {props.temp}<span className="unitTemp" >°C | <a href="/" onClick={handleFahrenheit}>°F </a></span>
      </div>) 
      
      :

      (<div >
        {convertFahrenheit()}<span className="unitTemp" > <a href="/" onClick={handleCelsius} >°C </a>|°F </span>
      </div>)
  )
  }

export default Unit;



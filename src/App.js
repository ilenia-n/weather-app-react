
import React from "react";
import './App.css';

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultcity="london" />
      <footer> <a href="https://github.com/ilenia-n/weather-app-react" target="_blank" rel="noopener noreferrer" >Open-source code </a>by Ilenia</footer>
    </div>
  );
}

export default App;

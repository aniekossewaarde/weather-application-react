import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import './index.css';

export default function Weather() {
    let weatherData = {
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      };
      const [city, setCity] = useState("Barcelona");
      const [loaded, setLoaded] = useState(false);
      const [weather, setWeather] = useState({});
      

  
function updateWeather(response) {
setLoaded(true);
setWeather({
    temp: Math.round(response.data.main.temp),
    wind: Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    city: response.data.name,
    description: "Cloudy",

})
}
    

function handleSubmit(event) {
event.preventDefault();

let apiKey = "ab69138d433c5c85edafefc09e466c07";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(updateWeather);
}
 
function updateCity(event) {
setCity(event.target.value);
}



if (loaded) {
    return (
        <div className="app-wrapper">
        <div className="weather-application">
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
            type="search"
            placeholder="Enter a city..."
            className="search-field"
            onChange={updateCity}
    
             />
             <input
             type="submit"
             value="Search"
             className="search-button"
              />
        </form>
        <div className="overview">
            <h1>{weather.city}</h1>
            <ul>
              <li>
                last updated: <span></span>
              </li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
            </ul>
            <img src={weather.icon} alt="weather icon" />
            <strong>{weather.temp}</strong> <span className="units">°C</span>
</div>
<div className="forecast-section">
<span className="forecast-day">Mon</span>
<span className="forecast-day">Tue</span>
<span className="forecast-day">Wed</span>
<span className="forecast-day">Thu</span>
<span className="forecast-day">Fri</span>
<div className="forecast-icon-section">
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="RAIN"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="CLOUDY"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="WIND"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="FOG"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <div className="forecast-temp-section">
        <span className="forecast-temp-day">11-5</span>
        <span className="forecast-temp-day">10-5</span>
        <span className="forecast-temp-day">13-8</span>
        <span className="forecast-temp-day">10-3</span>
        <span className="forecast-temp-day">11-6</span>
    </div>
</div>
</div>
</div>
<small>
          <a
            href="https://github.com/aniekossewaarde/weather-application-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/aniek-ossewaarde-88a17085/?originalSubdomain=es"
            target="_blank" 
            rel="noreferrer"
          >
            {" "}
            Aniek Ossewaarde
          </a>
        </small>
        </div>
    );
} else {
    return (
        <div className="app-wrapper">
        <div className="weather-application">
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
            type="search"
            placeholder="Enter a city..."
            className="search-field"
            onChange={updateCity}
    
             />
             <input
             type="submit"
             value="Search"
             className="search-button"
              />
        </form>
        <div className="overview">
            <h1></h1>
            <ul>
              <li>
                last updated: <span></span>
              </li>
              <li>Description:</li>
              <li>Humidity:  %</li>
                <li>Wind:  km/h</li>
            </ul>
            <img src={weatherData.imgUrl} alt="weather icon" />
            <strong></strong> <span className="units">°C</span>
</div>
<div className="forecast-section">
<span className="forecast-day">Mon</span>
<span className="forecast-day">Tue</span>
<span className="forecast-day">Wed</span>
<span className="forecast-day">Thu</span>
<span className="forecast-day">Fri</span>
<div className="forecast-icon-section">
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="RAIN"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="CLOUDY"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="WIND"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <span className="forecast-icon">
    <ReactAnimatedWeather
          icon="FOG"
          color="grey"
          size={30}
          animate={true}
        />
    </span>
    <div className="forecast-temp-section">
        <span className="forecast-temp-day">11-5</span>
        <span className="forecast-temp-day">10-5</span>
        <span className="forecast-temp-day">13-8</span>
        <span className="forecast-temp-day">10-3</span>
        <span className="forecast-temp-day">11-6</span>
    </div>
</div>
</div>
</div>
<small>
          <a
            href="https://github.com/aniekossewaarde/weather-application-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/aniek-ossewaarde-88a17085/?originalSubdomain=es"
            target="_blank" 
            rel="noreferrer"
          >
            {" "}
            Aniek Ossewaarde
          </a>
        </small>
        </div>
    )
}
}
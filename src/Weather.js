import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import './index.css';

export default function Weather() {
    let weatherData = {
        city: "Santa Susanna",
        date: "Friday, 15:00",
        description: "Cloudy",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        humidity: 80,
        wind: 10
      };

    return (
        <div className="app-wrapper">
        <div className="weather-application">
        <form className="search-bar">
            <input
            type="search"
            placeholder="Enter a city..."
            className="search-field"
            autocomplete="off"
             />
             <input
             type="submit"
             value="Search"
             className="search-button"
              />
        </form>
        <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                last updated: <span>{weatherData.date}</span>
              </li>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
            </ul>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <strong>3</strong> <span className="units">°C</span>
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
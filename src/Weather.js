import React from "react";

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
</div>
<small>
          <a
            href="https://github.com/aniekossewaarde/project-weather-app"
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
import React from "react";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 19,
    date: "Monday 14:30",
    humidity: 80,
    wind: 10,
  };

  return (
    <div class="container">
      <div class="weatherAppWrapper">
        <div class="weatherApp">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <h1> {weatherData.city} </h1>
            <ul>
              <li>{weatherData.date}</li>
              <li id="description"></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="d-flex weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Clear"
                  id="icon"
                />
                <div>
                  <strong>{weatherData.temperature}</strong>
                  <span class="units">
                    <a href="#" id="celsius-link" class="active">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link" class="fahrenheit">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <small>
          This project was coded by Sofia Torosian and is open-sourced on
          <a
            class="link"
            href="https://github.com/softoro/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and hosted on
          <a
            class="link"
            href="https://superb-kitsune-c0f039.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}

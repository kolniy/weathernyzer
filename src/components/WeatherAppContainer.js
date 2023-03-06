import React from "react";

const WeatherAppContainer = () => {
  return (
    <div className="weather-app">
      <div className="container">
        <h3 className="brand">the weather</h3>
        <div>
          <h1 className="temp">16&#176;</h1>
          <div className="city-time">
            <h1 className="name">London</h1>
            <small>
              <span className="time">06:09</span>-
              <span className="date">Monday sep 20</span>
            </small>
          </div>
          <div className="weather">
            <img
              src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
              className="icon"
              alt="icon"
              width="50"
              height="50"
            />
            <span className="condition">cloudy</span>
          </div>
        </div>
      </div>
      <div className="panel">
        <form>
          <input
            type="text"
            className="search"
            placeholder="Search Location..."
          />
          <button type="submit" className="btn-submit">
            <i className="fas fa-search"></i>
          </button>
          <ul className="cities">
            <li className="city">New York</li>
            <li className="city">California</li>
            <li className="city">Abuja</li>
            <li className="city">Lagos</li>
          </ul>
          <ul className="details">
            <h4>Weather Details</h4>
            <li>
              <span>Cloudy</span>
              <span className="cloud">89%</span>
            </li>
            <li>
              <span>Humidity</span>
              <span className="humidity">64%</span>
            </li>
            <li>
              <span>Wind</span>
              <span className="wind">8km/h</span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default WeatherAppContainer;

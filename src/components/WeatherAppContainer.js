import React, { useState, useEffect } from "react";
import { getDayOfWeek } from "../utilities";
import dayBackgroundImage1 from "../images/day1.jpg";
import dayBackgroundImage2 from "../images/day2.jpg";
import dayBackgroundImage3 from "../images/day3.jpg";
import dayBackgroundImage4 from "../images/day4.jpg";
import nightClear from "../images/clear.jpg";

const WeatherAppContainer = ({ weatherData, getWeatherData }) => {
  const [backgroundImage, setBackgroundImage] = useState(dayBackgroundImage1);
  const [btnBackground, setBtnBackground] = useState("#fa6d1b");
  const [cityInput, setCityInput] = useState("");

  const { current, location } = weatherData || {};
  const { temp_c, condition, cloud, humidity, wind_kph } = current || {};
  // default time of day
  const conditionCode = condition?.code;
  let timeOfDay = "day";
  const date = location?.localtime;
  const year = parseInt(date?.substr(0, 4));
  const month = parseInt(date?.substr(5, 2));
  const day = parseInt(date?.substr(8, 2));
  const time = date?.substr(11);
  if (!current?.is_day) {
    timeOfDay = "night";
  }

  useEffect(() => {
    if (weatherData !== null) {
      if (conditionCode === 1000) {
        setBackgroundImage(nightClear);
        setBtnBackground("#e5ba92");
        if (timeOfDay === "night") {
          setBtnBackground("#181e27");
          setBackgroundImage(dayBackgroundImage4);
        }
      } else if (
        conditionCode === 1003 ||
        conditionCode === 1006 ||
        conditionCode === 1009 ||
        conditionCode === 1030 ||
        conditionCode === 1069 ||
        conditionCode === 1087 ||
        conditionCode === 1135 ||
        conditionCode === 1273 ||
        conditionCode === 1276 ||
        conditionCode === 1279 ||
        conditionCode === 1282
      ) {
        setBackgroundImage(dayBackgroundImage3);
        setBtnBackground("#fa6b1b");
        if (timeOfDay === "night") {
          setBtnBackground("#181e27");
        }
      } else if (
        conditionCode === 1063 ||
        conditionCode === 1069 ||
        conditionCode === 1072 ||
        conditionCode === 1150 ||
        conditionCode === 1153 ||
        conditionCode === 1180 ||
        conditionCode === 1183 ||
        conditionCode === 1186 ||
        conditionCode === 1189 ||
        conditionCode === 1192 ||
        conditionCode === 1204 ||
        conditionCode === 1207 ||
        conditionCode === 1240 ||
        conditionCode === 1243 ||
        conditionCode === 1246 ||
        conditionCode === 1249 ||
        conditionCode === 1252
      ) {
        setBackgroundImage(dayBackgroundImage1);
        setBtnBackground("#647d75");
        if (timeOfDay === "night") {
          setBtnBackground("#325c80");
        }
      } else {
        setBackgroundImage(dayBackgroundImage2);
        setBackgroundImage("#d72aa");
        if (timeOfDay === "night") {
          setBtnBackground("#1b1b1b");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getWeatherData(cityInput);
  };

  const handleCityListClick = (e) => {
    getWeatherData(e.target.innerText.toLowerCase());
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="weather-app"
    >
      <div className="container">
        <h3 className="brand">weathernyzer</h3>
        <div>
          <h1 className="temp">
            {weatherData !== null ? temp_c : 500}&#176; C
          </h1>
          <div className="city-time">
            <h1 className="name">
              {weatherData !== null ? location.name : "Invalid Location"}
            </h1>
            <small>
              <span className="time">
                {weatherData !== null ? time : "13:29"}
              </span>
              -
              <span className="date">
                {weatherData !== null
                  ? `${getDayOfWeek(day, month, year)} ${day}, ${month} ${year}`
                  : "Sunday 10, 10 2021"}
              </span>
            </small>
          </div>
          <div className="weather">
            <img
              src={
                weatherData !== null
                  ? `http://${condition.icon.substr(2)}`
                  : "https://cdn-icons-png.flaticon.com/512/169/169367.png"
              }
              className="icon"
              alt="icon"
              width="50"
              height="50"
            />
            <span className="condition">
              {weatherData !== null ? condition.text : "Misty"}
            </span>
          </div>
        </div>
      </div>
      <div className="panel">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="search"
            placeholder="Search Location..."
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button
            style={{
              background: btnBackground,
            }}
            type="submit"
            className="submit"
          >
            <i className="fas fa-search"></i>
          </button>
          <ul className="cities">
            <li onClick={handleCityListClick} className="city">
              New York
            </li>
            <li onClick={handleCityListClick} className="city">
              London
            </li>
            <li onClick={handleCityListClick} className="city">
              Abuja
            </li>
            <li onClick={handleCityListClick} className="city">
              Lagos
            </li>
          </ul>
          <ul className="details">
            <h4>Weather Details</h4>
            <li>
              <span>Cloudy</span>
              <span className="cloud">
                {weatherData !== null ? cloud : "25"}%
              </span>
            </li>
            <li>
              <span>Humidity</span>
              <span className="humidity">
                {weatherData !== null ? humidity : "75"}%
              </span>
            </li>
            <li>
              <span>Wind</span>
              <span className="wind">
                {weatherData !== null ? wind_kph : "5.4"}km/h
              </span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default WeatherAppContainer;

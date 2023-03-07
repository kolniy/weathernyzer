import { useState } from "react";
import axios from "axios";

import WeatherAppContainer from "./components/WeatherAppContainer";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (cityInput) => {
    if (cityInput.length === 0) {
      return alert("Invalid City Input");
    }
    const requestUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityInput}`;
    try {
      const res = await axios.get(requestUrl);
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
      alert("Error Fetching Weather Data");
      if (weatherData === null) {
        setWeatherData(null);
      }
    }
  };

  return (
    <>
      <WeatherAppContainer
        weatherData={weatherData}
        getWeatherData={getWeatherData}
      />
    </>
  );
}

export default App;

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "25d874c323417eb6fa36f60bca44be24";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}=&appid=${apiKey}&units=metric`;
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherSize">
            <WeatherIcon code="01d" size={32} />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}

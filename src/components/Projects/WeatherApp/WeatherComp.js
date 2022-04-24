import React, { Component } from 'react';
import './WeatherComp.css';

export default class WeatherComp extends Component {
  render() {
    return (
      <div className="WeatherPreview">
          <img src="./images/Weather.PNG"/>
        
        <div className="WeatherDesc">
          <hr/>
          <h1>Weather App</h1>
          <p>This weather app pulls API data from OpenWeather’s API
            and displays the current temp, max temp, min temp, description of temp,
            and what it “feels” like in the city the user enters. 
          </p>
          <a href="https://weather-checker-app.herokuapp.com/index.html" target="_blank"><button>View Project</button></a>
          <a href="https://github.com/lbruesehoff/WeatherChecker" target="_blank"><button>View Code</button></a>
          <hr/>
        </div>
      </div>
    )
  }
}

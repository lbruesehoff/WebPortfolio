import React, { Component } from 'react'
import PlanetComp from './components/Projects/PlanetFacts/PlanetComp'
import VonzellaComp from './components/Projects/Vonzella/VonzellaComp'
import WeatherComp from './components/Projects/WeatherApp/WeatherComp'


export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <VonzellaComp/>
        <PlanetComp />
        <WeatherComp />
      </div>
    )
  }
}

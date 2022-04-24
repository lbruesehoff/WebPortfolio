import React, { Component } from 'react';
import PlanetComp from './components/Projects/PlanetFacts/PlanetComp';
import VonzellaComp from './components/Projects/Vonzella/VonzellaComp';
import WeatherComp from './components/Projects/WeatherApp/WeatherComp';
import GitHubSearch from './components/Projects/GitHubSearch/GitHubSearch';
import StudioGhibli from './components/Projects/StudioGhibli/StudioGhibli';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <VonzellaComp/>
        <GitHubSearch />
        <StudioGhibli />
        <PlanetComp />
        <WeatherComp />
      </div>
    )
  }
}

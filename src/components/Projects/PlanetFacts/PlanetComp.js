import React, { Component } from 'react';
import './PlanetComp.css';

export default class PlanetComp extends Component {
  render() {
    return (
      <div className="PlanetPreview">
          
          <img className='PlanetMobile' src="./images/Planets.PNG"/>
        <div className="PlanetDesc">
          <hr/>
          <h1>Planet Facts</h1>
          <p>Planet Facts is a project from Front-end Mentor that demonstrates my knowledge of
            HTML, CSS, and Javascript. Making it adaptive for desktop, mobile, and tablet viewing.
            Users should be able to view the optimal layout for the app depending on their device's screen size
            see hover states for all interactive elements on the page view each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology". 
          </p>
          <a href="" target="_blank"><button>View Project</button></a>
          <hr/>
        </div>

        <img className="PlanetImg" src="./images/Planets.PNG"/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import './VonzellaComp.css';

export default class VonzellaComp extends Component {
  render() {
    return (
      <div className="VonzellaPreview">
          <img src="./images/VonzellaPrev.PNG"/>
        
        <div className="VonDesc">
          <hr/>
          <h1>Vonzella</h1>
          <p>Vonzella is a bail insurance web application that is written with Ruby on Rails, HTML, CSS, Javascript, and BootStrap.
            This is a CRUD web application that uses e-commerce features, SMS features, and authentication. Please note this is an MVP
            and if you are intrested please contact them.
          </p>
          <a href="https://app.vonzella.com/" target="_blank"><button>View Project</button></a>
          <hr/>
        </div>
      </div>
    )
  }
}

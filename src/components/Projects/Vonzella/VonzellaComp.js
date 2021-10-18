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
             This web app uses e-commerce features with their $10 a month subscription connected through stripe,
            CRUD principles for the database, and SMS features that get sent to the phone number you put in.
          </p>
          <button>View Project</button>
          <hr/>
        </div>
      </div>
    )
  }
}

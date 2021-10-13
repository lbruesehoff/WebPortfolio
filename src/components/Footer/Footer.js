import React, { Component } from 'react';
import './Footer.css';
import logo from './logo.svg'
import gitHub from './github.svg'
import linkedIn from './linkedin.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContent">

        
          <ul>
            <li>
              <div className="footerLogo">
                <img src={logo} />
              </div>
            </li>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>
              <div className="gitHub">
                <img src={gitHub}/>
              </div>
            </li>
            <li>
              <div className="linkedIn">
              <img src={linkedIn}/>
              </div>
            </li>
          </ul>
        
        
      </div>
    )
  }
}

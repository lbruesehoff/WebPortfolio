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
                <a href="/"><img src={logo} /></a>
              </div>
            </li>
            <a href="/"><li>Home</li></a>
            <a href="/Portfolio"><li>Portfolio</li></a>
            <a href=""><li>Contact</li></a>
            <ul className='ul2'>
              <li>
                <div className="gitHub">
                  <a href='https://github.com/lbruesehoff' target="_blank">
                    <img src={gitHub}/>
                  </a>
                </div>
              </li>
              <li>
                <div className="linkedIn">
                  <a href="https://www.linkedin.com/in/lbruesehoff/" target="_blank">
                    <img src={linkedIn}/>
                  </a>
                </div>
              </li>
            </ul>
          </ul>
        
        
      </div>
    )
  }
}

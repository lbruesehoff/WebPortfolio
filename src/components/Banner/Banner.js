import React, { Component } from 'react';
import './banner.css'

export default class Banner extends Component {
  render() {
    return (
      <div className="headerContent">
          <img className="header" src="./images/banner.jpg" alt="Banner"/>
          <div className="text-box">
            <div className="introText">
            Hello, I'm Logan Bruesehoff and I love creating beautiful websites.
            </div>
            <button className="aboutMeBtn">
            
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/>
              <path opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
            </div>

            <div className="aboutText">
              About Me
            </div>
            </button>
          </div>
          
      </div>
    )
  }
}

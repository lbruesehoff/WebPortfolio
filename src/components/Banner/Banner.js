import React, { Component } from 'react';
import './banner.css'

export default class Banner extends Component {
  render() {
    return (
      <div className="container">
          <img className="header" src="./images/banner.jpg" alt=""/>
          <div className="text-box">
            Hello, I'm Logan <br/> Bruesehoff and I <br/> love creating websites<br/>
            <button className="aboutMeBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/>
              <path opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
              About Me
            </button>
          </div>
          
      </div>
    )
  }
}

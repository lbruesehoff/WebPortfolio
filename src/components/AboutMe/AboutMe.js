import './AboutMe.css'
import React, { Component } from 'react'


export default class AboutMe extends Component {
  render() {
    return (
      <div className="content">
          <div className="me" id="AboutMe">
            <img className="avatar" src="./images/Avatar.png" alt="Avatar"/>
          </div>
          <div className="about" >
            <hr/>
            <h1>About Me</h1>
            <p> 
              I’m a junior web developer looking for a new role in an exciting company. 
              I focus on writing accessible HTML, using modern CSS practices and writing clean 
              JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
              whatever tools are required. I’m based in Minneapolis, MN, but I’m happy working remotely 
              and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
              I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
              you to check out my work.
            </p>
            <a href="/Portfolio"><button>Go to portfolio</button></a>
            <hr/>
          </div>
      </div>
    )
  }
}

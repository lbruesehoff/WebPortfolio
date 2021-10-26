import React, { Component } from 'react';
import './ContactIntro.css';
import gitHub from './github.svg';
import linkedIn from './linkedin.svg';

export default class ContactIntro extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="ContactTitle">
          <h1>Get In Touch</h1>
        </div>
        <div className="ContactText">
          <p>
          I’d love to hear about what you’re working on and how I could help. I’m currently 
          looking for a new role and am open to a wide range of opportunities. My preference 
          would be to find a remote position in a company. But I’m also happy to hear about 
          opportunites that don’t fit that description. I’m a hard-working and positive person 
          who will always approach each task with a sense of purpose and attention to detail. 
          Please do feel free to check out my online profiles below and get in touch using the form.
          </p>
          <div className="ContactIcons">
            <div className="ContactGit">
              <a href='https://github.com/lbruesehoff' target="_blank">
                <img src={gitHub}/>
              </a>
            </div>
            <div className="ContactLinked">
              <a href="https://www.linkedin.com/in/lbruesehoff/" target="_blank">
                <img src={linkedIn}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

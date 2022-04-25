import React, { Component } from 'react';
import './Monster.css';

class Monster extends Component {
    render() {
        return (
            <div className="MonsterPreview">
          
            <img className='MonsterMobile' src="./images/monsters.PNG"/>
          <div className="MonsterDesc">
            <hr/>
            <h1>Monster Filter App</h1>
            <p>
                This project uses React hooks to filter out the monsters live as you type.
                The API used is a json placeholder to fetch user names and emails to be displayed.
                I created this project because I wanted to get a better understanding of React.
                This project made me have a better understanding of hooks and how things are rendered. 
            </p>
            <a href="https://warm-platypus-e33351.netlify.app/" target="_blank"><button>View Project</button></a>
            <a href="https://github.com/lbruesehoff/MonsterFilter" target="_blank"><button>View Code</button></a>
            <hr/>
          </div>
  
          <img className="MonsterImg" src="./images/monsters.PNG"/>
        </div>
        );
    }
}

export default Monster;